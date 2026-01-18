import mapboxgl from 'mapbox-gl';
import './styles.css';
import { hotels, elizabethLineStations, verdictOrder, verdictColors } from './data/hotels.js';
import elizabethLineIconUrl from '../Elizabeth_line_roundel_(no_text).svg';
import pteLogoUrl from './img/PTE-World-2026-logo.jpeg';

// You'll need to replace this with your actual Mapbox token
// For production, use environment variables
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || 'YOUR_MAPBOX_TOKEN';

mapboxgl.accessToken = MAPBOX_TOKEN;

let map;
let currentRoute = null;
let markers = [];
let selectedHotelId = null;
let lightboxState = {
  images: [],
  index: 0
};

const PRICE_NOTE = 'for 3/16-3/21 (updated 1/18/26)';
const ELIZABETH_LINE_TIMES = {
  'tottenham-court-road': { train: 16, totalOffset: 28 },
  'bond-street': { train: 17, totalOffset: 25 }
};
const MOBILE_QUERY = '(max-width: 768px)';

// Initialize the application
function init() {
  initMap();
  renderHotelList();
  initMapDrawer();
}

// Initialize Mapbox map
function initMap() {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gadol87/cmdeqv1ux000o01s0dzkjhhqp',
    center: [-0.135, 51.515], // Center of London hotel area
    zoom: 14
  });

  map.on('load', () => {
    addHotelMarkers();
    addStationMarkers();
    addPteMarker();
  });

  // Add navigation controls
  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
}

// Add hotel markers to map
function addHotelMarkers() {
  hotels.forEach(hotel => {
    const el = createHotelMarker(hotel);

    const marker = new mapboxgl.Marker({ element: el, anchor: 'left' })
      .setLngLat(hotel.coordinates)
      .addTo(map);

    el.addEventListener('click', () => {
      showHotelDetail(hotel.id);
    });

    markers.push({ id: hotel.id, marker, element: el });
  });
}

// Create hotel marker element
function createHotelMarker(hotel) {
  const el = document.createElement('div');
  el.className = 'hotel-marker';

  const verdictClass = hotel.verdict.toLowerCase().replace(' ', '-');
  const verdictCssClass = verdictClass === 'strong-match' ? 'strong' :
                          verdictClass === 'good-match' ? 'good' : 'marginal';

  // Get TripAdvisor rating from the tripAdvisor object
  const rating = hotel.tripAdvisor?.rating || hotel.tripAdvisorRating || '';

  el.innerHTML = `
    <div class="hotel-marker-content">
      <div class="hotel-marker-circle ${verdictCssClass}">${rating}</div>
      <span class="hotel-marker-name">${hotel.name}</span>
    </div>
  `;

  return el;
}

// Add Elizabeth Line station markers
function addStationMarkers() {
  elizabethLineStations.forEach(station => {
    const el = document.createElement('div');
    el.className = 'station-marker';
    el.innerHTML = `
      <img class="elizabeth-line-icon" src="${elizabethLineIconUrl}" alt="" />
      <span class="station-marker-name">${station.name}</span>
    `;

    new mapboxgl.Marker({ element: el, anchor: 'center' })
      .setLngLat(station.coordinates)
      .addTo(map);
  });
}

function addPteMarker() {
  const el = document.createElement('img');
  el.className = 'pte-marker';
  el.src = pteLogoUrl;
  el.alt = 'PTE World 2026';

  new mapboxgl.Marker({ element: el, anchor: 'center' })
    .setLngLat([0.029086, 51.508211])
    .addTo(map);
}

function initMapDrawer() {
  const handle = document.getElementById('map-drawer-handle');
  if (!handle) return;

  handle.addEventListener('click', () => {
    const isMinimized = document.body.classList.contains('map-drawer-min');
    setMapDrawerState(isMinimized ? 'max' : 'min');
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia(MOBILE_QUERY).matches) {
      document.body.classList.remove('map-drawer-min', 'map-drawer-max');
      map?.resize();
      return;
    }
    if (!document.body.classList.contains('map-drawer-min') &&
        !document.body.classList.contains('map-drawer-max')) {
      setMapDrawerState('max');
    }
  });

  if (window.matchMedia(MOBILE_QUERY).matches) {
    setMapDrawerState('max');
  }
}

function setMapDrawerState(state) {
  if (!window.matchMedia(MOBILE_QUERY).matches) return;
  document.body.classList.toggle('map-drawer-min', state === 'min');
  document.body.classList.toggle('map-drawer-max', state === 'max');
  window.setTimeout(() => map?.resize(), 200);
}

// Render hotel list in sidebar
function renderHotelList() {
  const container = document.getElementById('sidebar-content');

  // Group hotels by verdict
  const groupedHotels = {};
  verdictOrder.forEach(verdict => {
    groupedHotels[verdict] = hotels.filter(h => h.verdict === verdict);
  });

  let html = '';

  verdictOrder.forEach(verdict => {
    const hotelGroup = groupedHotels[verdict];
    if (hotelGroup.length === 0) return;

    const verdictClass = verdict.toLowerCase().replace(' ', '-');
    const verdictCssClass = verdictClass === 'strong-match' ? 'strong' :
                            verdictClass === 'good-match' ? 'good' : 'marginal';

    html += `
      <div class="verdict-group">
        <div class="verdict-header">
          <span class="verdict-badge ${verdictCssClass}">${verdict}</span>
          <span class="verdict-count">${hotelGroup.length} hotel${hotelGroup.length > 1 ? 's' : ''}</span>
        </div>
        ${hotelGroup.map(hotel => createHotelCard(hotel)).join('')}
      </div>
    `;
  });

  container.innerHTML = html;

  // Add click listeners
  container.querySelectorAll('.hotel-card').forEach(card => {
    card.addEventListener('click', () => {
      const hotelId = card.dataset.hotelId;
      showHotelDetail(hotelId);
    });
  });
}

// Create hotel card HTML
function createHotelCard(hotel) {
  const rating = hotel.tripAdvisor?.rating;
  const ratingHtml = rating
    ? `<span class="hotel-meta-item">
         <svg width="12" height="12" viewBox="0 0 20 20" fill="#fbbf24"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
         ${rating}
       </span>`
    : '';

  const priceHtml = hotel.price
    ? `<span class="hotel-meta-item price-meta">${hotel.price}/night <span class="price-note">3/16-3/21 (updated 1/18/26)</span></span>`
    : '';

  const thumbnail = hotel.thumbnail || hotel.images?.[0];
  const thumbnailHtml = thumbnail
    ? `<img src="${thumbnail}" alt="${hotel.name} thumbnail" loading="lazy" />`
    : `<div class="hotel-thumb-placeholder" aria-hidden="true"></div>`;

  return `
    <div class="hotel-card" data-hotel-id="${hotel.id}">
      <div class="hotel-card-thumb">
        ${thumbnailHtml}
      </div>
      <div class="hotel-card-body">
        <div class="hotel-card-header">
          <div>
            <div class="hotel-name">${hotel.name}</div>
            <div class="hotel-neighborhood">${hotel.neighborhood}</div>
          </div>
          <div class="score-item">
            <span class="score-value">${hotel.scores.overall}</span>
          </div>
        </div>
        <div class="hotel-scores">
          <span class="score-item">Arch <span class="score-value">${hotel.scores.architectural}</span></span>
          <span class="score-item">Int <span class="score-value">${hotel.scores.interior}</span></span>
          <span class="score-item">Area <span class="score-value">${hotel.scores.neighborhood}</span></span>
        </div>
        ${(ratingHtml || priceHtml || hotel.elizabethLine) ? `
          <div class="hotel-meta">
            ${ratingHtml}
            ${priceHtml}
            ${hotel.elizabethLine ? `
              <span class="hotel-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                ${hotel.elizabethLine.walkTime} to ${hotel.elizabethLine.station}
              </span>
            ` : ''}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// Show hotel detail view
async function showHotelDetail(hotelId) {
  const hotel = hotels.find(h => h.id === hotelId);
  if (!hotel) return;

  selectedHotelId = hotelId;

  // Pan map to hotel
  map.flyTo({
    center: hotel.coordinates,
    zoom: 15,
    duration: 1000
  });

  // Get nearest station and fetch route
  const nearestStation = getNearestStation(hotel.coordinates);
  const routeData = await fetchWalkingRoute(nearestStation.coordinates, hotel.coordinates);

  // Render detail view
  renderHotelDetail(hotel, nearestStation, routeData);
  setMapDrawerState('min');

  // Draw route on map
  if (routeData) {
    drawRoute(routeData.geometry);
  }
}

// Get nearest Elizabeth Line station
function getNearestStation(hotelCoords) {
  let nearest = null;
  let minDistance = Infinity;

  elizabethLineStations.forEach(station => {
    const distance = getDistance(hotelCoords, station.coordinates);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = station;
    }
  });

  return nearest;
}

// Calculate distance between two coordinates (Haversine formula)
function getDistance(coord1, coord2) {
  const R = 6371; // Earth's radius in km
  const dLat = (coord2[1] - coord1[1]) * Math.PI / 180;
  const dLon = (coord2[0] - coord1[0]) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(coord1[1] * Math.PI / 180) * Math.cos(coord2[1] * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Fetch walking route from Mapbox Directions API
async function fetchWalkingRoute(origin, destination) {
  try {
    const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      return {
        duration: Math.round(route.duration / 60), // Convert to minutes
        distance: (route.distance / 1609.34).toFixed(2), // Convert to miles
        geometry: route.geometry
      };
    }
  } catch (error) {
    console.error('Error fetching route:', error);
  }
  return null;
}

// Draw route on map
function drawRoute(geometry) {
  // Remove existing route
  if (map.getSource('route')) {
    map.removeLayer('route');
    map.removeSource('route');
  }

  map.addSource('route', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: geometry
    }
  });

  map.addLayer({
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#6366f1',
      'line-width': 4,
      'line-opacity': 0.8
    }
  });
}

// Render hotel detail view
function renderHotelDetail(hotel, nearestStation, routeData) {
  const container = document.getElementById('sidebar-content');

  const verdictClass = hotel.verdict.toLowerCase().replace(' ', '-');
  const verdictCssClass = verdictClass === 'strong-match' ? 'strong' :
                          verdictClass === 'good-match' ? 'good' : 'marginal';
  const verdictColor = verdictColors[hotel.verdict];

  const rating = hotel.tripAdvisor?.rating;
  const ratingHtml = rating
    ? `<span class="detail-badge rating">
         <svg width="12" height="12" viewBox="0 0 20 20" fill="#fbbf24" style="margin-right: 4px;"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
         ${rating} TripAdvisor
       </span>`
    : '';

  const priceHtml = hotel.price
    ? `<span class="detail-badge price">${hotel.price}/night</span>`
    : '';

  const stationTimes = ELIZABETH_LINE_TIMES[nearestStation.id];
  const trainTime = stationTimes ? stationTimes.train : null;
  const totalTime = stationTimes && routeData
    ? routeData.duration + stationTimes.totalOffset
    : null;

  const priceNoteHtml = hotel.price
    ? `<div class="detail-price-note">
         <span>Rate is ${hotel.price}/night ${PRICE_NOTE}.</span>
         ${hotel.tripAdvisor?.url ? `<a href="${hotel.tripAdvisor.url}" target="_blank" rel="noopener">Check TripAdvisor for latest price</a>` : ''}
       </div>`
    : '';

  const galleryHtml = hotel.images?.length
    ? `
      <div class="detail-gallery">
        <div class="detail-gallery-main">
          <img src="${hotel.images[0]}" alt="${hotel.name} photo" data-gallery-index="0" loading="lazy" />
        </div>
        <div class="detail-gallery-thumbs">
          ${hotel.images.map((src, idx) => `
            <button class="detail-thumb ${idx === 0 ? 'active' : ''}" data-gallery-index="${idx}" aria-label="View photo ${idx + 1}">
              <img src="${src}" alt="${hotel.name} thumbnail ${idx + 1}" loading="lazy" />
            </button>
          `).join('')}
        </div>
      </div>
    `
    : '';

  const routeHtml = routeData
    ? `
      <div class="route-info">
        <div class="route-info-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          <span class="route-info-title">Walking from Elizabeth Line</span>
        </div>
        <div class="route-stats">
          <div class="route-stat">
            <span class="route-stat-value">${routeData.duration} min</span>
            <span class="route-stat-label">Walk time</span>
          </div>
          <div class="route-stat">
            <span class="route-stat-value">${routeData.distance} mi</span>
            <span class="route-stat-label">Distance</span>
          </div>
          ${trainTime !== null ? `
            <div class="route-stat">
              <span class="route-stat-value">${trainTime} min</span>
              <span class="route-stat-label">Train time</span>
            </div>
          ` : ''}
          ${totalTime !== null ? `
            <div class="route-stat">
              <span class="route-stat-value">${totalTime} min</span>
              <span class="route-stat-label">Total travel</span>
            </div>
          ` : ''}
        </div>
        <div class="route-station">From ${nearestStation.name} station</div>
      </div>
    `
    : '';

  container.innerHTML = `
    <div class="detail-view">
      <button class="detail-back" onclick="window.backToList()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to list
      </button>

      <div class="detail-header">
        <h2 class="detail-name">${hotel.name}</h2>
        <p class="detail-address">${hotel.address}, ${hotel.neighborhood}</p>
        <div class="detail-badges">
          <span class="detail-badge verdict ${verdictCssClass}" style="background: ${verdictColor}">${hotel.verdict}</span>
          ${ratingHtml}
          ${priceHtml}
        </div>
        ${priceNoteHtml}
      </div>

      ${galleryHtml}

      ${routeHtml}

      <div class="scores-grid">
        <div class="score-card">
          <div class="score-card-label">Architectural Interest</div>
          <div class="score-card-value">${hotel.scores.architectural}/10</div>
        </div>
        <div class="score-card">
          <div class="score-card-label">Interior Design</div>
          <div class="score-card-value">${hotel.scores.interior}/10</div>
        </div>
        <div class="score-card">
          <div class="score-card-label">Neighborhood</div>
          <div class="score-card-value">${hotel.scores.neighborhood}/10</div>
        </div>
        <div class="score-card">
          <div class="score-card-label">Overall Fit</div>
          <div class="score-card-value">${hotel.scores.overall}/10</div>
        </div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Summary</h3>
        <p class="detail-section-content">${hotel.summary}</p>
      </div>

      ${hotel.tripAdvisorDescription ? `
        <div class="detail-section">
          <h3 class="detail-section-title">Tripadvisor Description</h3>
          <p class="detail-section-content">${hotel.tripAdvisorDescription}</p>
        </div>
      ` : ''}

      <div class="detail-section">
        <h3 class="detail-section-title">Exterior & Urban Presence</h3>
        <p class="detail-section-content">${hotel.details.exterior}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Interior Architecture</h3>
        <p class="detail-section-content">${hotel.details.interior}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Distinctiveness</h3>
        <p class="detail-section-content">${hotel.details.distinctiveness}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Neighborhood</h3>
        <p class="detail-section-content">${hotel.details.neighborhoodQuality}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Evening Bar</h3>
        <p class="detail-section-content">${hotel.details.bar}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Noise Considerations</h3>
        <p class="detail-section-content">${hotel.details.noise}</p>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Strengths</h3>
        <ul class="detail-list strengths">
          ${hotel.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Weaknesses</h3>
        <ul class="detail-list weaknesses">
          ${hotel.weaknesses.map(w => `<li>${w}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  initGallery(container, hotel);
}

function initGallery(container, hotel) {
  if (!hotel.images || hotel.images.length === 0) return;

  const mainImage = container.querySelector('.detail-gallery-main img');
  const thumbButtons = Array.from(container.querySelectorAll('.detail-thumb'));

  if (!mainImage || thumbButtons.length === 0) return;

  const setActive = (index) => {
    const nextImage = hotel.images[index];
    if (!nextImage) return;
    mainImage.src = nextImage;
    mainImage.dataset.galleryIndex = index;
    thumbButtons.forEach((button) => {
      button.classList.toggle('active', Number(button.dataset.galleryIndex) === index);
    });
  };

  mainImage.addEventListener('click', () => {
    const index = Number(mainImage.dataset.galleryIndex || 0);
    openLightbox(hotel.images, index);
  });

  thumbButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.galleryIndex || 0);
      setActive(index);
      openLightbox(hotel.images, index);
    });
  });
}

function ensureLightbox() {
  let lightbox = document.querySelector('.photo-lightbox');
  if (lightbox) return lightbox;

  lightbox = document.createElement('div');
  lightbox.className = 'photo-lightbox';
  lightbox.innerHTML = `
    <div class="photo-lightbox-backdrop" data-lightbox-close="true"></div>
    <div class="photo-lightbox-content">
      <button class="photo-lightbox-close" aria-label="Close photo viewer" data-lightbox-close="true">×</button>
      <button class="photo-lightbox-nav prev" aria-label="Previous photo">‹</button>
      <img class="photo-lightbox-image" alt="Hotel photo" />
      <button class="photo-lightbox-nav next" aria-label="Next photo">›</button>
      <div class="photo-lightbox-count"></div>
    </div>
  `;

  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.dataset.lightboxClose === 'true') {
      closeLightbox();
    }
  });

  lightbox.querySelector('.photo-lightbox-nav.prev').addEventListener('click', (event) => {
    event.stopPropagation();
    stepLightbox(-1);
  });

  lightbox.querySelector('.photo-lightbox-nav.next').addEventListener('click', (event) => {
    event.stopPropagation();
    stepLightbox(1);
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') stepLightbox(-1);
    if (event.key === 'ArrowRight') stepLightbox(1);
  });

  return lightbox;
}

function openLightbox(images, index) {
  if (!images || images.length === 0) return;
  lightboxState = { images, index: Number(index) || 0 };

  const lightbox = ensureLightbox();
  updateLightbox();
  lightbox.classList.add('open');
}

function closeLightbox() {
  const lightbox = document.querySelector('.photo-lightbox');
  if (lightbox) lightbox.classList.remove('open');
}

function stepLightbox(delta) {
  const count = lightboxState.images.length;
  if (count === 0) return;
  const nextIndex = (lightboxState.index + delta + count) % count;
  lightboxState.index = nextIndex;
  updateLightbox();
}

function updateLightbox() {
  const lightbox = document.querySelector('.photo-lightbox');
  if (!lightbox) return;
  const imageEl = lightbox.querySelector('.photo-lightbox-image');
  const countEl = lightbox.querySelector('.photo-lightbox-count');
  const src = lightboxState.images[lightboxState.index];
  if (imageEl && src) imageEl.src = src;
  if (countEl) countEl.textContent = `${lightboxState.index + 1} / ${lightboxState.images.length}`;
}

// Back to list function (exposed globally for onclick)
window.backToList = function() {
  selectedHotelId = null;

  // Remove route from map
  if (map.getSource('route')) {
    map.removeLayer('route');
    map.removeSource('route');
  }

  // Reset map view
  map.flyTo({
    center: [-0.135, 51.515],
    zoom: 14,
    duration: 1000
  });

  renderHotelList();
  setMapDrawerState('max');
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
