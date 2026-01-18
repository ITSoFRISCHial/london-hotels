export const hotels = [
  {
    id: 'london-edition',
    name: 'The London EDITION',
    neighborhood: 'Fitzrovia/Soho edge',
    address: '10 Berners Street',
    coordinates: [-0.1364, 51.51703],
    verdict: 'Strong match',
    scores: {
      architectural: 8.5,
      interior: 9.0,
      neighborhood: 9.0,
      overall: 9.0
    },
    elizabethLine: {
      station: 'Tottenham Court Road',
      walkTime: '~5 min'
    },
    summary: 'Big-city "grand hotel" bones with a confident, design-world interior that still feels London rather than generic. The Berners Hotel has deep local continuity (19th-c origins; current building early 1900s) and reads as a proper urban landmark.',
    details: {
      exterior: 'Strong corner/streetscape presence on Berners St; feels like a restored London commercial hotel rather than a glass-box import.',
      interior: 'Deliberately theatrical—layered lighting, strong contrast, clubby-but-refined public rooms. Design-led rather than "nice finishes."',
      distinctiveness: 'High—this is a scene hotel, but with real architectural gravitas.',
      neighborhoodQuality: 'Fitzrovia + easy Soho/NoMad-ish energy; great independent food, galleries nearby, strong street life.',
      bar: 'Punch Room is iconic but can skew "hot ticket." Lobby Bar is the calmer fallback.',
      noise: 'Mixed reports—some complain about room-to-room/plumbing noise; also reports of excellent soundproofing depending on room.'
    },
    strengths: ['Landmark presence + genuinely memorable public interiors', 'Very "of London"'],
    weaknesses: ['Can feel social/scene-forward', 'Noise risk if you draw a bad room'],
    price: null,
    tripAdvisor: {
      rating: 4.5,
      reviews: 1710,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d4889797-Reviews-The_London_EDITION-London_England.html'
    }
  },
  {
    id: 'resident-soho',
    name: 'The Resident Soho',
    neighborhood: 'Soho',
    address: '25 Frith Street',
    coordinates: [-0.131, 51.5131],
    verdict: 'Marginal',
    scores: {
      architectural: 4.0,
      interior: 5.5,
      neighborhood: 8.5,
      overall: 5.5
    },
    elizabethLine: {
      station: 'Tottenham Court Road',
      walkTime: '~5 min'
    },
    summary: 'Smart, well-run, highly practical—more "excellent basecamp" than "architectural experience."',
    details: {
      exterior: 'Low-key infill/converted fabric; blends in (not a destination building).',
      interior: 'Clean, efficient, compact; intentional in a hospitality-operations way, not a materials/space way.',
      distinctiveness: 'Limited—feels closer to a polished serviced-apartment hotel than a design statement.',
      neighborhoodQuality: 'Prime Soho—historic street pattern, dense storefront rhythm, great independent restaurants and nightlife right outside.',
      bar: 'Not really a "hang" hotel—go elsewhere in Soho.',
      noise: 'Surprisingly good soundproofing for Soho, but street noise can happen.'
    },
    strengths: ['Location', 'Calm rooms relative to Soho', 'Practical comforts'],
    weaknesses: ['Not architecturally inspiring', 'No real lobby/bar as a design destination'],
    price: null,
    tripAdvisor: {
      rating: 4.8,
      reviews: 4433,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d2406203-Reviews-The_Resident_Soho-London_England.html'
    }
  },
  {
    id: 'radisson-blu-mercer',
    name: 'Radisson Blu Hotel, London Mercer Street',
    neighborhood: 'Seven Dials/Covent Garden',
    address: '20 Mercer Street',
    coordinates: [-0.127072, 51.514127],
    verdict: 'Marginal',
    scores: {
      architectural: 5.0,
      interior: 6.0,
      neighborhood: 9.0,
      overall: 5.5
    },
    elizabethLine: {
      station: 'Tottenham Court Road',
      walkTime: '~5 min'
    },
    summary: 'Great location, but the experience reads "upmarket chain" more than place-rooted design.',
    details: {
      exterior: 'Discreet West End building—fine, but not memorable as architecture.',
      interior: '"Chic lobby" vibes, but rooms skew small/standardized; some details feel incoherent.',
      distinctiveness: 'Low—competes on location/service more than design personality.',
      neighborhoodQuality: 'Seven Dials is excellent: historic grain, walkable streets, theater/culture, strong indie food/shopping.',
      bar: 'Serviceable rather than destination.',
      noise: 'Repeated complaints about noise from restaurant/service areas (early morning furniture, etc.).'
    },
    strengths: ['Location', 'Convenient West End base'],
    weaknesses: ['Chain feel', 'Noise risk', 'Rooms can feel cramped/un-special'],
    price: null,
    tripAdvisor: {
      rating: 4.5,
      reviews: 5040,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d1799756-Reviews-Radisson_Blu_Hotel_London_Mercer_Street-London_England.html'
    }
  },
  {
    id: 'bloomsbury-hotel',
    name: 'The Bloomsbury Hotel',
    neighborhood: 'Bloomsbury',
    address: '16-22 Great Russell Street',
    coordinates: [-0.12903, 51.51717],
    verdict: 'Strong match',
    scores: {
      architectural: 9.0,
      interior: 8.5,
      neighborhood: 8.5,
      overall: 8.8
    },
    elizabethLine: {
      station: 'Tottenham Court Road',
      walkTime: '~2-3 min'
    },
    summary: 'A real architectural credential: an Edwin Lutyens-designed, Grade II-listed neo-Georgian building—genuinely rooted in London\'s institutional/literary fabric.',
    details: {
      exterior: 'Powerful, dignified redbrick composition—reads like civic London (because it was, originally).',
      interior: 'Recent refurb brings confident color + atmospheric public rooms (notably the Coral Room). Still feels connected to the building\'s bones.',
      distinctiveness: 'High—very few hotels give you Lutyens as the wrapper.',
      neighborhoodQuality: 'Bloomsbury\'s historic squares + university/museum gravity; great walking streets, bookish energy, easy West End access.',
      bar: 'The Coral Room + other lounges are strong "sit and linger" spaces.',
      noise: 'Some older complaints about street/old windows; not universal, but worth requesting a quiet room.'
    },
    strengths: ['Legit architectural significance', 'Strong sense of place', 'Excellent lounge culture'],
    weaknesses: ['Potential street/window noise in some rooms', 'Can feel "hotel-ish" in parts after renovations'],
    price: null,
    tripAdvisor: {
      rating: 4.7,
      reviews: 5714,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d192771-Reviews-The_Bloomsbury-London_England.html'
    }
  },
  {
    id: 'marylebone-hotel',
    name: 'The Marylebone',
    neighborhood: 'Marylebone Village',
    address: '47 Welbeck Street',
    coordinates: [-0.14973, 51.5178],
    verdict: 'Good match',
    scores: {
      architectural: 6.5,
      interior: 7.5,
      neighborhood: 9.0,
      overall: 7.8
    },
    elizabethLine: {
      station: 'Bond Street',
      walkTime: '~6 min'
    },
    summary: 'More "classic well-heeled London" than "architecture pilgrimage," but it\'s tastefully done and sits in one of the best neighborhoods to walk as an architect.',
    details: {
      exterior: 'Solid, discreet urban hotel—pleasant, not iconic.',
      interior: 'A composed, clubby comfort with classic cues (Tablet notes 20th-century classic / light Art Deco feel).',
      distinctiveness: 'Moderate—less singular than the true design-led boutiques.',
      neighborhoodQuality: 'Marylebone is outstanding for historic fabric, human-scale streets, and independent shops/food (and easy Mayfair access).',
      bar: 'Strong in-hotel option (calm, grown-up bar culture is a known plus).',
      noise: 'Generally described as quiet; occasional street/building-works issues can happen (like anywhere central).'
    },
    strengths: ['Neighborhood + walkability', 'Polished, comfortable interiors', 'Good bar'],
    weaknesses: ['Won\'t scratch the "distinct architecture" itch like EDITION/Bloomsbury'],
    price: null,
    tripAdvisor: {
      rating: 4.7,
      reviews: 6137,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d192702-Reviews-The_Marylebone-London_England.html'
    }
  },
  {
    id: 'botree',
    name: 'The BoTree London',
    neighborhood: 'Marylebone/Mayfair edge',
    address: '10 Wigmore Street',
    coordinates: [-0.147413, 51.516616],
    verdict: 'Good match',
    scores: {
      architectural: 7.5,
      interior: 8.0,
      neighborhood: 9.0,
      overall: 8.2
    },
    elizabethLine: {
      station: 'Bond Street',
      walkTime: '~2 min'
    },
    summary: 'A contemporary newcomer with a real design story (EPR Architects; interiors by Concrete). Modern, but trying to feel neighborhood-rooted rather than "airport luxury."',
    details: {
      exterior: 'Confident modern massing at a key seam (Marylebone–Mayfair–Soho). It reads "new London" more than heritage.',
      interior: 'Residential-warm modernity (oak/leather tones, living-room layout language) and lots of "considered touch" feedback from guests.',
      distinctiveness: 'Above average for new luxury—less cookie-cutter than most, but still within contemporary-hotel typology.',
      neighborhoodQuality: 'Excellent for design shopping and strolling: Marylebone Village + Mayfair retail + Soho culture within minutes.',
      bar: 'Two bars on-site; should work for a relaxed drink, though it\'s a newer "buzz" property.',
      noise: 'Often praised for being close to the action without the noise; it\'s tucked off Oxford St.'
    },
    strengths: ['Legit design authorship', 'Prime seam-location', 'Modern but not sterile'],
    weaknesses: ['If you want historic bones, it won\'t compete with Bloomsbury/EDITION'],
    price: null,
    tripAdvisor: {
      rating: 4.6,
      reviews: 145,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d25257438-Reviews-The_BoTree_London-London_England.html'
    }
  },
  {
    id: 'welbeck-hotel',
    name: 'The Welbeck Hotel',
    neighborhood: 'Marylebone/Oxford St backstreet',
    address: '57-59 Welbeck Street',
    coordinates: [-0.14929, 51.51686],
    verdict: 'Marginal',
    scores: {
      architectural: 6.5,
      interior: 7.5,
      neighborhood: 8.5,
      overall: 7.3
    },
    elizabethLine: {
      station: 'Bond Street',
      walkTime: '~4-5 min'
    },
    summary: 'A freshly re-born Edwardian-era property (former Holiday Inn Oxford Circus) with a real attempt at boutique identity and Art Nouveau–leaning motifs post-renovation.',
    details: {
      exterior: 'Edwardian shell on Welbeck Street—more "solid London commercial block" than landmark, but credible.',
      interior: 'Renovation-led boutique polish; reported marble bathrooms/material upgrades and a more stylized public realm than its former chain life.',
      distinctiveness: 'Improved, but it may still read like a very good re-skin rather than a once-in-a-trip design object.',
      neighborhoodQuality: 'Excellent for walking: Marylebone streets + quick hop to Mayfair; Oxford Street is near but you\'re just behind it.',
      bar: 'The Welbecker looks like a genuinely pleasant, calm lounge-bar (more "locals gathering" than party).',
      noise: 'Many describe rooms as quiet; still, it\'s central—request higher floor/back room if sensitive.'
    },
    strengths: ['Big location payoff', 'Thoughtful renovation', 'Nice bar/lobby for evenings'],
    weaknesses: ['Design ambition may not fully escape its "ex-chain" DNA'],
    price: null,
    tripAdvisor: {
      rating: 4.6,
      reviews: 72,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d199119-Reviews-The_Welbeck_Hotel-London_England.html'
    }
  },
  {
    id: 'biltmore-mayfair',
    name: 'The Biltmore Mayfair',
    neighborhood: 'Mayfair',
    address: '44 Grosvenor Square',
    coordinates: [-0.15105, 51.51072],
    verdict: 'Good match',
    scores: {
      architectural: 7.5,
      interior: 7.5,
      neighborhood: 9.0,
      overall: 8.0
    },
    elizabethLine: {
      station: 'Bond Street',
      walkTime: '~7-8 min'
    },
    summary: 'Large, historic-framed hotel (originally late-60s Richard Seifert building) that was extensively reworked into a grand Mayfair presence. The red-brick street facade engages Grosvenor Square quite elegantly, and the interiors mix classic London Art Deco cues with contemporary cool.',
    details: {
      exterior: 'The facade contributes to the urban fabric of Grosvenor Square; it reads as stately rather than generic. The vantage of the square gives it good civic grounding in Mayfair.',
      interior: 'Interiors are layered and elegant, blending period references with contemporary design. More polished than audacious, but materials feel intentional.',
      distinctiveness: 'The mix of old and new gives it identity, though it stops short of being concept-driven design.',
      neighborhoodQuality: 'Very strong: Grosvenor Square and surrounding Mayfair streets offer historic fabric, galleries, independent boutiques, and top restaurants.',
      bar: 'Several well-appointed lounges and bars that are calm and refined (not nightclub-like).',
      noise: 'Mixed; generally refined interior layout reduces street intrusion but busy square edge can register on lower floors.'
    },
    strengths: ['Strong Mayfair presence', 'Thoughtful interiors', 'Excellent context'],
    weaknesses: ['Design ambition is one notch below the most daring London hotels'],
    price: null,
    tripAdvisor: {
      rating: 4.4,
      reviews: 335,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d17150006-Reviews-The_Biltmore_Mayfair-London_England.html'
    }
  },
  {
    id: 'chesterfield-mayfair',
    name: 'The Chesterfield Mayfair',
    neighborhood: 'Mayfair',
    address: '35 Charles Street',
    coordinates: [-0.14711, 51.50773],
    verdict: 'Marginal',
    scores: {
      architectural: 5.5,
      interior: 6.5,
      neighborhood: 9.0,
      overall: 6.5
    },
    elizabethLine: {
      station: 'Bond Street',
      walkTime: '~8-10 min'
    },
    summary: 'Classic Mayfair townhouses repurposed into a boutique hotel. Interiors lean into traditional British club-house elegance rather than a design manifesto.',
    details: {
      exterior: 'Lovely Georgian townhouse blocks on Charles Street — fits well into Mayfair\'s historic fabric but not a strong architectural landmark.',
      interior: 'Comfortable and richly furnished, but more traditional than avant-garde. Think classic British elegance with pattern and texture rather than architectural innovation.',
      distinctiveness: 'Has charm and personality, but not especially unique in London\'s boutique context.',
      neighborhoodQuality: 'Excellent — quiet Mayfair streets close to galleries, parks, and upscale shopping.',
      bar: 'Sem\'s of Mayfair and rooftop Stanley\'s are well-liked; bar atmospheres skew refined and quiet.',
      noise: 'Quiet and comfortable — rooms on residential street help mitigate urban clamor.'
    },
    strengths: ['Very pleasant, quintessentially British', 'Excellent service/comfort'],
    weaknesses: ['Not a "design statement"', 'More historic boutique comfort than architecturally exciting'],
    price: null,
    tripAdvisor: {
      rating: 4.8,
      reviews: 5828,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d192064-Reviews-The_Chesterfield_Mayfair-London_England.html'
    }
  },
  {
    id: 'langham-london',
    name: 'The Langham, London',
    neighborhood: 'Marylebone/West End',
    address: '1C Portland Place',
    coordinates: [-0.14465, 51.51801],
    verdict: 'Strong match',
    scores: {
      architectural: 9.5,
      interior: 9.0,
      neighborhood: 9.0,
      overall: 9.3
    },
    elizabethLine: {
      station: 'Bond Street',
      walkTime: '~6-7 min'
    },
    summary: 'London\'s original grand hotel (opened 1865) with a richly layered history and one of the city\'s most significant hospitality buildings. The Portland Place facade commands presence and carries real historic weight.',
    details: {
      exterior: 'Monumental 19th-century architecture facing a grand, axial boulevard — very strong civic presence.',
      interior: 'Interiors balance heritage (Palm Court, grand ballrooms) with sophisticated modern refurbishment — luxurious and intentional, not generic.',
      distinctiveness: 'Very high — few London hotels have this level of historic identity and architectural narrative.',
      neighborhoodQuality: 'Marylebone / West End — grand streets, historic town fabric, galleries, excellent food and culture.',
      bar: 'The Artesian bar is world-renowned for its innovation and ambience; Palm Court offers calm afternoon/evening atmosphere.',
      noise: 'Solidly built, though major boulevards can have traffic — generally well-handled by soundproofing.'
    },
    strengths: ['Iconic architectural landmark with layered interiors', 'Deep sense of place'],
    weaknesses: ['As classic luxury, some public spaces can feel traditional rather than conceptually experimental'],
    price: null,
    tripAdvisor: {
      rating: 4.7,
      reviews: 2692,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d187569-Reviews-The_Langham_London-London_England.html'
    }
  },
  {
    id: 'soho-hotel',
    name: 'The Soho Hotel',
    neighborhood: 'Soho',
    address: '4 Richmond Mews',
    coordinates: [-0.13363, 51.51393],
    verdict: 'Good match',
    scores: {
      architectural: 7.5,
      interior: 8.5,
      neighborhood: 9.5,
      overall: 8.2
    },
    elizabethLine: {
      station: 'Tottenham Court Road',
      walkTime: '~6-7 min'
    },
    summary: 'A Firmdale property with bespoke interiors by Kit Kemp known for playful, eclectic patterns and spatial richness. The hotel sits within historic Soho mews streets rather than a singular architectural envelope.',
    details: {
      exterior: 'Modest mews building engaging a very livable Soho lane — subtle but contextually strong.',
      interior: 'Interiors showcase bold color/texture mixes, tactile and highly individualistic. This isn\'t conservative luxury — it\'s creative hospitality.',
      distinctiveness: 'High; rooms and public spaces have real personality and avoid the cookie-cutter look.',
      neighborhoodQuality: 'Exceptional for walking — Soho\'s historic artisan streets, independent cafes, and nightlife are very architecturally rich.',
      bar: 'Refuel restaurant/bar is lively yet sociable; good for relaxed evening drinks.',
      noise: 'Soho density means street energy can intrude — higher floors recommended.'
    },
    strengths: ['Interiors with real design voice', 'Contextual in a culturally rich area'],
    weaknesses: ['Exterior not a standout architectural statement', 'Soho bustle can be noisy'],
    price: null,
    tripAdvisor: {
      rating: 4.8,
      reviews: 1884,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d497689-Reviews-The_Soho_Hotel-London_England.html'
    }
  },
  {
    id: 'charlotte-street',
    name: 'Charlotte Street Hotel',
    neighborhood: 'Fitzrovia',
    address: '15-17 Charlotte Street',
    coordinates: [-0.13496, 51.518433],
    verdict: 'Good match',
    scores: {
      architectural: 8.0,
      interior: 9.0,
      neighborhood: 9.0,
      overall: 8.7
    },
    elizabethLine: {
      station: 'Tottenham Court Road',
      walkTime: '~7-8 min'
    },
    summary: 'Firmdale boutique with interiors by Kit Kemp rooted in British art and creative culture — strongly rooted in Fitzrovia\'s artistic identity.',
    details: {
      exterior: 'Historic Fitzrovia street frontage — subtle, well-scaled urbanism that feels like a creative London \'home\' rather than a corporate box.',
      interior: 'Interiors are highly curated, with art and bespoke pieces that reference the Bloomsbury Group and British modernism.',
      distinctiveness: 'High — clear design authorship and whimsy give it flavor beyond "nice hotel."',
      neighborhoodQuality: 'Excellent — leafy Fitzrovia, cafes, studios, galleries; wonderful to wander.',
      bar: 'Oscar bar fills out a convivial social space; popular but not loud.',
      noise: 'Generally calm, with good internal planning and street context.'
    },
    strengths: ['Very design-driven interiors', 'Contextual and charismatic'],
    weaknesses: ['Exterior presence is modest — not a landmark on its own'],
    price: null,
    tripAdvisor: {
      rating: 4.7,
      reviews: 941,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d548133-Reviews-Charlotte_Street_Hotel-London_England.html'
    }
  },
  {
    id: 'loscar-london',
    name: "L'oscar London",
    neighborhood: 'Holborn/Bloomsbury',
    address: '2-6 Southampton Row',
    coordinates: [-0.12017, 51.51799],
    verdict: 'Strong match',
    scores: {
      architectural: 9.5,
      interior: 9.5,
      neighborhood: 9.0,
      overall: 9.3
    },
    elizabethLine: {
      station: 'Tottenham Court Road',
      walkTime: '~5-6 min'
    },
    summary: 'Ex-church conversion (Grade II listed) transformed into one of London\'s most theatrical, design-rich hotels by Jacques Garcia — marrying historic architectural drama with highly curated interiors.',
    details: {
      exterior: 'Gorgeous Baroque/turn-of-century former church fabric gives the hotel real architectural gravitas within Holborn/Bloomsbury.',
      interior: 'Interiors are theatrical, opulent, and singular — dramatic ceilings, historic surfaces, and sumptuous detailing are everywhere.',
      distinctiveness: 'Very high — this feels like a private, cultivated world, not a hotel template.',
      neighborhoodQuality: 'Excellent — a lively mix of complex city fabric with galleries, theatres, and shops; Holborn/Bloomsbury is dense with architecture.',
      bar: 'Café Oscar and the Baptist Grill set within the chapel offer atmospheric, special-purpose evening spaces.',
      noise: 'Interiors feel well insulated; central location is busy but the building\'s mass helps buffer sound.'
    },
    strengths: ['Exceptional sense of place and transformation', 'One of London\'s most charismatic hotel interiors'],
    weaknesses: ['The theatrical approach may not appeal to those who prefer minimal or understated design'],
    price: null,
    tripAdvisor: {
      rating: 4.8,
      reviews: 782,
      url: 'https://www.tripadvisor.com/Hotel_Review-g186338-d13867323-Reviews-L_oscar_London-London_England.html'
    }
  }
];

export const elizabethLineStations = [
  {
    id: 'tottenham-court-road',
    name: 'Tottenham Court Road',
    coordinates: [-0.13063534, 51.51629025]
  },
  {
    id: 'bond-street',
    name: 'Bond Street',
    coordinates: [-0.1489336, 51.51367]
  }
];

export const verdictOrder = ['Strong match', 'Good match', 'Marginal'];

export const verdictColors = {
  'Strong match': '#16a34a',
  'Good match': '#2563eb',
  'Marginal': '#d97706'
};
