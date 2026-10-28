/*
 * TRAVEL EXPLORER — destination details, galleries, itineraries, hotels and room estimates
 * Works with the existing index.html IDs: #package-list, #search, #package-count,
 * #empty-message, #destination, #booking-form, #name, #email, #date, #travelers,
 * #message, #menu-toggle, #main-nav and #back-to-top.
 *
 * IMPORTANT: This front-end does not have a hotel API connected. Hotel names listed below
 * are example suggestions for researching accommodation; room rates and availability are
 * NOT live or guaranteed. The site links users to a live hotel-search page. A real booking
 * requires a hotel provider API/backend, credentials, and a secure booking/payment workflow.
 */
"use strict";

const tours = [
  {name:"Goa Beach Holiday",destination:"Goa",country:"India",days:3,nights:2,price:6999,region:"Beaches",images:["photo-1512343879784-a960bf40e7f2","photo-1507525428034-b723cf961d3e","photo-1510414842594-a61c69b5ae57"],places:["Baga Beach","Fort Aguada","Anjuna Flea Market","Old Goa churches"],plan:[["Arrival and beach time","Check in, relax at Baga or Calangute Beach, and enjoy a sunset walk."],["North Goa sightseeing","Visit Fort Aguada, Anjuna, and local markets."],["Old Goa and departure","Explore Old Goa and depart after checkout."]],hotels:[{name:"Taj Cidade de Goa Heritage",area:"Vainguinim Beach, Goa",type:"Beach resort",rooms:[{name:"Superior Room",price:9500,guests:2,facilities:"Air conditioning, Wi-Fi, private bathroom"},{name:"Sea View Room",price:14500,guests:2,facilities:"Sea view, balcony, Wi-Fi"}]},{name:"ibis Styles Goa Calangute",area:"Calangute, Goa",type:"Hotel",rooms:[{name:"Standard Room",price:5200,guests:2,facilities:"Air conditioning, Wi-Fi, ensuite bathroom"},{name:"Family Room",price:7600,guests:3,facilities:"Extra sleeping space, Wi-Fi"}]}]},
  {name:"Mysuru Heritage Tour",destination:"Mysuru",country:"India",days:2,nights:1,price:3999,region:"Heritage",images:["photo-1600100397608-f010c1f4c4e2","photo-1566139884669-4b4c7a0b9d6b","photo-1518005020951-eccb494ad742"],places:["Mysuru Palace","Chamundi Hill","Devaraja Market","Brindavan Gardens"],plan:[["Palace and city","Visit Mysuru Palace and Devaraja Market."],["Chamundi Hill and departure","Visit Chamundi Hill; Brindavan Gardens if time permits."]],hotels:[{name:"Radisson Blu Plaza Hotel Mysore",area:"Mysuru",type:"Hotel",rooms:[{name:"Superior Room",price:7800,guests:2,facilities:"Wi-Fi, air conditioning, ensuite bathroom"},{name:"Deluxe Room",price:9800,guests:2,facilities:"Larger room, Wi-Fi, seating area"}]},{name:"Southern Star Mysore",area:"Mysuru",type:"Hotel",rooms:[{name:"Standard Room",price:4200,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Suite",price:7900,guests:2,facilities:"Separate sitting area, Wi-Fi"}]}]},
  {name:"Coorg Nature Escape",destination:"Coorg",country:"India",days:3,nights:2,price:5499,region:"Nature",images:["photo-1441974231531-c6227db76b6e","photo-1472396961693-142e6e269027","photo-1500530855697-b586d89ba3ee"],places:["Abbey Falls","Raja's Seat","Coffee plantations","Madikeri Fort"],plan:[["Arrive in Coorg","Check in and explore Madikeri."],["Waterfalls and coffee","Visit Abbey Falls and a coffee plantation."],["Raja's Seat and departure","Enjoy the viewpoint and depart."]],hotels:[{name:"Club Mahindra Madikeri",area:"Galibeedu, Coorg",type:"Resort",rooms:[{name:"Studio Room",price:8500,guests:2,facilities:"Resort facilities, Wi-Fi availability varies"},{name:"One-bedroom apartment",price:12500,guests:4,facilities:"Living area, kitchenette may vary by unit"}]},{name:"The Tamara Coorg",area:"Yavakapadi, Coorg",type:"Nature resort",rooms:[{name:"Luxury Cottage",price:26000,guests:2,facilities:"Private deck, nature views, resort facilities"}]}]},
  {name:"Kerala Backwater Escape",destination:"Kerala",country:"India",days:4,nights:3,price:8999,region:"Nature",images:["photo-1602216056096-3b40cc0c9944","photo-1593693397690-362cb9666fc2","photo-1500375592092-40eb2168fd21"],places:["Alleppey backwaters","Fort Kochi","Munnar tea gardens","Local Kerala cuisine"],plan:[["Kochi arrival","Explore Fort Kochi and its waterfront."],["Travel to Alleppey","Enjoy a backwater cruise or pre-booked houseboat."],["Munnar or local sightseeing","Visit tea gardens if included in your selected route."],["Departure","Checkout and transfer."]],hotels:[{name:"Taj Malabar Resort & Spa, Cochin",area:"Willingdon Island, Kochi",type:"Waterfront hotel",rooms:[{name:"Superior Room",price:13500,guests:2,facilities:"Wi-Fi, air conditioning, hotel facilities"},{name:"Sea View Room",price:18500,guests:2,facilities:"Water views, Wi-Fi"}]},{name:"Lake Palace Resort",area:"Alleppey, Kerala",type:"Backwater resort",rooms:[{name:"Lake View Room",price:8500,guests:2,facilities:"Lake views, air conditioning"},{name:"Family Cottage",price:12500,guests:4,facilities:"Family layout, resort facilities"}]}]},
  {name:"Ooty Hill Station",destination:"Ooty",country:"India",days:3,nights:2,price:4999,region:"Mountains",images:["photo-1472396961693-142e6e269027","photo-1500534623283-312aade485b7","photo-1464822759023-fed622ff2c3b"],places:["Botanical Gardens","Ooty Lake","Doddabetta Peak","Nilgiri Mountain Railway"],plan:[["Arrival and lake","Check in and visit Ooty Lake."],["Gardens and viewpoints","Visit Botanical Gardens and Doddabetta Peak."],["Train ride and departure","Take a train ride if tickets are available, then depart."]],hotels:[{name:"Savoy - IHCL SeleQtions",area:"Ooty",type:"Heritage hotel",rooms:[{name:"Classic Room",price:12500,guests:2,facilities:"Heritage setting, Wi-Fi, hotel amenities"},{name:"Suite",price:21000,guests:2,facilities:"Larger room, sitting area"}]},{name:"Sterling Ooty Fern Hill",area:"Ooty",type:"Resort",rooms:[{name:"Classic Room",price:6500,guests:2,facilities:"Heating may vary, Wi-Fi"},{name:"Family Suite",price:10500,guests:4,facilities:"Family layout, resort amenities"}]}]},
  {name:"Hampi Ancient Wonders",destination:"Hampi",country:"India",days:2,nights:1,price:3499,region:"Heritage",images:["photo-1561361513-2d000a50f0dc","photo-1548013146-72479768bada","photo-1518005020951-eccb494ad742"],places:["Virupaksha Temple","Vijaya Vittala Temple","Stone Chariot","Hemakuta Hill"],plan:[["Temple trail","Explore Virupaksha Temple and Hampi Bazaar."],["Vittala complex and departure","Visit the Stone Chariot and nearby ruins."]],hotels:[{name:"Evolve Back Hampi",area:"Kampli, near Hampi",type:"Heritage resort",rooms:[{name:"Heritage Suite",price:24000,guests:2,facilities:"Suite facilities, resort pool and dining"}]},{name:"Hyatt Place Hampi",area:"Vidyanagar, Karnataka",type:"Hotel",rooms:[{name:"Standard Room",price:7000,guests:2,facilities:"Wi-Fi, air conditioning, hotel amenities"},{name:"Suite",price:10500,guests:2,facilities:"Extra space, Wi-Fi"}]}]},
  {name:"Kodaikanal Misty Hills",destination:"Kodaikanal",country:"India",days:3,nights:2,price:4999,region:"Mountains",images:["photo-1500530855697-b586d89ba3ee","photo-1464822759023-fed622ff2c3b","photo-1441974231531-c6227db76b6e"],places:["Coaker's Walk","Bryant Park","Kodaikanal Lake","Pillar Rocks"],plan:[["Lake and town","Check in and visit the lake."],["Viewpoints","Visit Coaker's Walk, Pillar Rocks and Bryant Park."],["Breakfast and departure","Checkout and depart."]],hotels:[{name:"The Carlton",area:"Kodaikanal Lake",type:"Lakefront hotel",rooms:[{name:"Deluxe Room",price:14500,guests:2,facilities:"Lakefront location, Wi-Fi"},{name:"Suite",price:22000,guests:2,facilities:"Separate sitting area, lake views may vary"}]},{name:"Sterling Kodai Lake",area:"Kodaikanal",type:"Resort",rooms:[{name:"Classic Room",price:6500,guests:2,facilities:"Wi-Fi, resort facilities"},{name:"Family Room",price:9500,guests:4,facilities:"Family layout"}]}]},
  {name:"Hyderabad City Discovery",destination:"Hyderabad",country:"India",days:2,nights:1,price:3999,region:"City",images:["photo-1519608487953-e999c86e7455","photo-1524492412937-b28074a5d7da","photo-1518005020951-eccb494ad742"],places:["Charminar","Golconda Fort","Salar Jung Museum","Hussain Sagar"],plan:[["Old City","Visit Charminar and nearby markets."],["Fort and lake","Explore Golconda Fort and Hussain Sagar before departure."]],hotels:[{name:"Taj Krishna, Hyderabad",area:"Banjara Hills",type:"Luxury hotel",rooms:[{name:"Superior Room",price:14500,guests:2,facilities:"Wi-Fi, air conditioning, hotel amenities"},{name:"Deluxe Room",price:18500,guests:2,facilities:"Larger room, Wi-Fi"}]},{name:"Novotel Hyderabad Convention Centre",area:"HITEC City",type:"Hotel",rooms:[{name:"Superior Room",price:9500,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Executive Room",price:13500,guests:2,facilities:"Work area, Wi-Fi"}]}]},
  {name:"Manali Mountain Adventure",destination:"Manali",country:"India",days:5,nights:4,price:12999,region:"Mountains",images:["photo-1626621341517-bbf3d9990a23","photo-1464822759023-fed622ff2c3b","photo-1470770841072-f978cf4d019e"],places:["Solang Valley","Hadimba Temple","Old Manali","Atal Tunnel (conditions permitting)"],plan:[["Arrival","Check in and explore local market."],["Manali town","Visit Hadimba Temple and Old Manali."],["Solang Valley","Enjoy mountain views and optional activities."],["Scenic excursion","Visit a nearby viewpoint; road access depends on weather."],["Checkout","Depart after breakfast."]],hotels:[{name:"The Himalayan",area:"Hadimba Road, Manali",type:"Heritage resort",rooms:[{name:"Heritage Room",price:14500,guests:2,facilities:"Mountain setting, Wi-Fi availability may vary"},{name:"Suite",price:24000,guests:2,facilities:"Larger room, sitting area"}]},{name:"Manu Allaya Resort",area:"Manali",type:"Resort",rooms:[{name:"Deluxe Room",price:8500,guests:2,facilities:"Heating, Wi-Fi, resort amenities"},{name:"Family Suite",price:13500,guests:4,facilities:"Family layout, seating area"}]}]},
  {name:"Taj Mahal and Agra",destination:"Agra",country:"India",days:2,nights:1,price:4499,region:"Heritage",images:["photo-1564507592333-c60657eea523","photo-1548013146-72479768bada","photo-1566139884669-4b4c7a0b9d6b"],places:["Taj Mahal","Agra Fort","Mehtab Bagh","Local marble craft shops"],plan:[["Taj Mahal","Visit the Taj Mahal (opening days and entry rules apply)."],["Agra Fort and departure","Explore Agra Fort and depart."]],hotels:[{name:"ITC Mughal, Agra",area:"Fatehabad Road, Agra",type:"Luxury hotel",rooms:[{name:"Executive Club Room",price:12500,guests:2,facilities:"Wi-Fi, hotel facilities"},{name:"Mughal Chamber",price:18500,guests:2,facilities:"Premium room amenities"}]},{name:"Courtyard by Marriott Agra",area:"Agra",type:"Hotel",rooms:[{name:"Deluxe Room",price:8500,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Suite",price:14500,guests:2,facilities:"Separate sitting area"}]}]},
  {name:"Jaipur Royal Experience",destination:"Jaipur",country:"India",days:3,nights:2,price:6499,region:"Heritage",images:["photo-1599661046827-dacff0c0f09a","photo-1599661046827-dacff0c0f09a","photo-1518005020951-eccb494ad742"],places:["Amber Fort","Hawa Mahal","City Palace","Jantar Mantar"],plan:[["Pink City","Visit Hawa Mahal and City Palace."],["Amber Fort","Explore Amber Fort and local markets."],["Jantar Mantar and departure","Visit the observatory and depart."]],hotels:[{name:"Rambagh Palace",area:"Jaipur",type:"Luxury heritage hotel",rooms:[{name:"Palace Room",price:65000,guests:2,facilities:"Luxury amenities, dining and hotel facilities"}]},{name:"ITC Rajputana, Jaipur",area:"Jaipur",type:"Hotel",rooms:[{name:"Executive Club Room",price:13500,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Suite",price:22000,guests:2,facilities:"Separate living space"}]}]},
  {name:"Kashmir Valley Holiday",destination:"Kashmir",country:"India",days:5,nights:4,price:14999,region:"Mountains",images:["photo-1519681393784-d120267933ba","photo-1470770841072-f978cf4d019e","photo-1464822759023-fed622ff2c3b"],places:["Dal Lake","Mughal Gardens","Gulmarg","Pahalgam (route dependent)"],plan:[["Srinagar arrival","Check in and enjoy Dal Lake."],["Srinagar gardens","Visit Mughal Gardens and local sights."],["Gulmarg excursion","Travel to Gulmarg if weather and roads allow."],["Local excursion","Explore a pre-agreed nearby destination."],["Checkout","Depart."]],hotels:[{name:"Vivanta Dal View, Srinagar",area:"Kralsangri, Srinagar",type:"Lake-view hotel",rooms:[{name:"Superior Charm Room",price:18500,guests:2,facilities:"Lake views vary by room, Wi-Fi"},{name:"Deluxe Room",price:24500,guests:2,facilities:"Premium amenities, views vary"}]},{name:"Lemon Tree Hotel Srinagar",area:"Srinagar",type:"Hotel",rooms:[{name:"Standard Room",price:8500,guests:2,facilities:"Wi-Fi, heating/air conditioning depending on season"}]}]},
  {name:"Rishikesh River Retreat",destination:"Rishikesh",country:"India",days:3,nights:2,price:5999,region:"Adventure",images:["photo-1470770841072-f978cf4d019e","photo-1500530855697-b586d89ba3ee","photo-1441974231531-c6227db76b6e"],places:["Triveni Ghat","Ram Jhula","Ganga Aarti","Optional rafting with licensed operator"],plan:[["Arrival and riverfront","Check in and visit Ram Jhula."],["Ghat and activities","Attend Ganga Aarti; rafting is optional and seasonal."],["Breakfast and departure","Checkout and depart."]],hotels:[{name:"Aloha on the Ganges",area:"Tapovan, Rishikesh",type:"Riverside resort",rooms:[{name:"Studio Apartment",price:9500,guests:2,facilities:"Kitchenette may vary, Wi-Fi"},{name:"Ganga View Room",price:13500,guests:2,facilities:"River views depend on room"}]},{name:"Ganga Kinare",area:"Rishikesh",type:"Riverside hotel",rooms:[{name:"Deluxe Room",price:10500,guests:2,facilities:"Wi-Fi, riverfront location"}]}]},
  {name:"Shimla Mountain Break",destination:"Shimla",country:"India",days:3,nights:2,price:7999,region:"Mountains",images:["photo-1464822759023-fed622ff2c3b","photo-1472396961693-142e6e269027","photo-1500534623283-312aade485b7"],places:["The Ridge","Mall Road","Jakhoo Temple","Kufri (weather permitting)"],plan:[["Arrival","Walk along Mall Road and The Ridge."],["Shimla and Kufri","Visit Jakhoo Temple and Kufri if accessible."],["Checkout","Depart after breakfast."]],hotels:[{name:"The Oberoi Cecil",area:"Shimla",type:"Luxury heritage hotel",rooms:[{name:"Deluxe Room",price:25000,guests:2,facilities:"Heritage property, Wi-Fi, hotel amenities"}]},{name:"Radisson Hotel Shimla",area:"Shimla",type:"Hotel",rooms:[{name:"Superior Room",price:12500,guests:2,facilities:"Wi-Fi, hotel facilities"},{name:"Deluxe Room",price:16500,guests:2,facilities:"Larger room, Wi-Fi"}]}]},
  {name:"Mumbai City Lights",destination:"Mumbai",country:"India",days:3,nights:2,price:6999,region:"City",images:["photo-1570168007204-dfb528c6958f","photo-1519608487953-e999c86e7455","photo-1507525428034-b723cf961d3e"],places:["Gateway of India","Marine Drive","Elephanta Caves (ferry permitting)","Colaba Causeway"],plan:[["South Mumbai","Visit Gateway of India and Colaba."],["Marine Drive","Explore the waterfront and city sights."],["Optional Elephanta visit","Ferry schedules permitting, then depart."]],hotels:[{name:"The Taj Mahal Palace, Mumbai",area:"Colaba, Mumbai",type:"Luxury hotel",rooms:[{name:"Luxury Room",price:32000,guests:2,facilities:"Premium amenities, Wi-Fi"},{name:"Sea View Room",price:45000,guests:2,facilities:"Sea view depends on room"}]},{name:"Trident Nariman Point",area:"Nariman Point, Mumbai",type:"Hotel",rooms:[{name:"Deluxe Room",price:22000,guests:2,facilities:"Wi-Fi, city or sea view varies"}]}]},
  {name:"Andaman Island Holiday",destination:"Andaman",country:"India",days:5,nights:4,price:15999,region:"Islands",images:["photo-1510414842594-a61c69b5ae57","photo-1500375592092-40eb2168fd21","photo-1507525428034-b723cf961d3e"],places:["Cellular Jail","Swaraj Dweep","Radhanagar Beach","Snorkelling with approved operators"],plan:[["Port Blair","Visit Cellular Jail and waterfront."],["Ferry to island","Transfer by scheduled ferry, subject to availability."],["Beach day","Visit Radhanagar Beach."],["Island activities","Optional water activities subject to weather."],["Return and depart","Transfer according to ferry and flight times."]],hotels:[{name:"SeaShell, Havelock",area:"Swaraj Dweep, Andaman",type:"Island hotel",rooms:[{name:"Standard Room",price:9500,guests:2,facilities:"Air conditioning, Wi-Fi availability varies"},{name:"Premium Cottage",price:15500,guests:2,facilities:"Cottage accommodation, resort amenities"}]},{name:"Welcomhotel by ITC Hotels, Bay Island",area:"Port Blair",type:"Waterfront hotel",rooms:[{name:"Standard Room",price:12500,guests:2,facilities:"Hotel amenities, views vary by room"}]}]},
  {name:"Udaipur Lakeside Escape",destination:"Udaipur",country:"India",days:3,nights:2,price:6999,region:"Heritage",images:["photo-1518548419970-58e3b4079ab2","photo-1599661046827-dacff0c0f09a","photo-1500530855697-b586d89ba3ee"],places:["City Palace","Lake Pichola","Jag Mandir","Saheliyon-ki-Bari"],plan:[["Lake Pichola","Visit the old city and lakeside."],["Palace and gardens","Explore City Palace and Saheliyon-ki-Bari."],["Boat ride and departure","Boat service depends on local operation."]],hotels:[{name:"Taj Lake Palace",area:"Lake Pichola, Udaipur",type:"Lake palace hotel",rooms:[{name:"Palace Room",price:65000,guests:2,facilities:"Luxury amenities, boat transfer arrangements"}]},{name:"Trident Udaipur",area:"Lake Pichola, Udaipur",type:"Resort hotel",rooms:[{name:"Garden View Room",price:14500,guests:2,facilities:"Garden views, Wi-Fi"},{name:"Deluxe Room",price:18500,guests:2,facilities:"Hotel amenities"}]}]},
  {name:"Darjeeling Tea Garden Tour",destination:"Darjeeling",country:"India",days:4,nights:3,price:8999,region:"Mountains",images:["photo-1500534623283-312aade485b7","photo-1472396961693-142e6e269027","photo-1464822759023-fed622ff2c3b"],places:["Tiger Hill","Tea gardens","Batasia Loop","Darjeeling Himalayan Railway"],plan:[["Arrival","Explore town and local markets."],["Sunrise viewpoint","Visit Tiger Hill if weather allows."],["Tea gardens and heritage train","Train tickets and schedules must be checked."],["Checkout","Depart."]],hotels:[{name:"Mayfair Darjeeling",area:"Darjeeling",type:"Heritage hotel",rooms:[{name:"Deluxe Room",price:15500,guests:2,facilities:"Wi-Fi, hotel facilities"},{name:"Suite",price:24000,guests:2,facilities:"Larger room, sitting area"}]},{name:"Summit Swiss Heritage Hotel",area:"Darjeeling",type:"Heritage hotel",rooms:[{name:"Standard Room",price:6500,guests:2,facilities:"Heating availability varies, Wi-Fi"}]}]},
  {name:"Shillong Nature Journey",destination:"Shillong",country:"India",days:4,nights:3,price:9999,region:"Nature",images:["photo-1441974231531-c6227db76b6e","photo-1500530855697-b586d89ba3ee","photo-1470770841072-f978cf4d019e"],places:["Umiam Lake","Elephant Falls","Shillong Peak","Nearby caves depending on route"],plan:[["Arrival","Explore Shillong town."],["Lake and waterfalls","Visit Umiam Lake and Elephant Falls."],["Viewpoints","Visit Shillong Peak and nearby sights."],["Departure","Checkout and transfer."]],hotels:[{name:"Courtyard by Marriott Shillong",area:"Shillong",type:"Hotel",rooms:[{name:"Deluxe Room",price:12500,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Suite",price:19500,guests:2,facilities:"Separate sitting space"}]},{name:"Vivanta Meghalaya, Shillong",area:"Shillong",type:"Hotel",rooms:[{name:"Superior Room",price:14500,guests:2,facilities:"Wi-Fi, hotel amenities"}]}]},
  {name:"Puri Coastal Retreat",destination:"Puri",country:"India",days:2,nights:1,price:3999,region:"Beach",images:["photo-1507525428034-b723cf961d3e","photo-1500375592092-40eb2168fd21","photo-1510414842594-a61c69b5ae57"],places:["Puri Beach","Jagannath Temple (entry rules apply)","Local market","Konark Sun Temple as an optional excursion"],plan:[["Beach and town","Check in and visit Puri Beach."],["Temple and departure","Visit local sights and depart."]],hotels:[{name:"Mayfair Heritage, Puri",area:"Puri",type:"Heritage resort",rooms:[{name:"Deluxe Room",price:14500,guests:2,facilities:"Resort amenities, Wi-Fi"},{name:"Suite",price:22000,guests:2,facilities:"Larger room, resort facilities"}]},{name:"Toshali Sands",area:"Near Puri",type:"Resort",rooms:[{name:"Standard Room",price:5500,guests:2,facilities:"Resort amenities, Wi-Fi availability varies"}]}]},
  {name:"Paris Romantic Getaway",destination:"Paris",country:"France",days:5,nights:4,price:49999,region:"City",images:["photo-1502602898657-3e91760cbb34","photo-1499856871958-5b9627545d1a","photo-1500530855697-b586d89ba3ee"],places:["Eiffel Tower","Louvre Museum","Seine riverfront","Montmartre"],plan:[["Arrival","Check in and stroll around your neighbourhood."],["Eiffel Tower","Visit the tower; tickets should be booked separately."],["Louvre and central Paris","Reserve museum entry in advance."],["Montmartre","Explore the neighbourhood and local cafés."],["Departure","Checkout and travel to the airport."]],hotels:[{name:"Novotel Paris Centre Tour Eiffel",area:"Paris, France",type:"Hotel",rooms:[{name:"Classic Room",price:24000,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Family Room",price:32000,guests:4,facilities:"Family layout, Wi-Fi"}]},{name:"ibis Paris Tour Eiffel Cambronne 15ème",area:"Paris, France",type:"Hotel",rooms:[{name:"Standard Room",price:16000,guests:2,facilities:"Wi-Fi, ensuite bathroom"}]}]},
  {name:"Bali Tropical Escape",destination:"Bali",country:"Indonesia",days:5,nights:4,price:34999,region:"Islands",images:["photo-1537996194471-e657df975ab4","photo-1518548419970-58e3b4079ab2","photo-1500375592092-40eb2168fd21"],places:["Ubud","Tegallalang rice terraces","Uluwatu Temple","Beach areas"],plan:[["Arrival","Transfer to hotel and relax."],["Ubud","Visit markets and cultural sights."],["Rice terraces","Visit Tegallalang and nearby areas."],["Uluwatu","Explore the temple area and coast."],["Departure","Checkout and transfer."]],hotels:[{name:"Maya Ubud Resort & Spa",area:"Ubud, Bali",type:"Resort",rooms:[{name:"Deluxe Room",price:18000,guests:2,facilities:"Resort amenities, Wi-Fi"},{name:"Pool Villa",price:38000,guests:2,facilities:"Private pool in selected villa categories"}]},{name:"Holiday Inn Resort Bali Nusa Dua",area:"Nusa Dua, Bali",type:"Beach resort",rooms:[{name:"Standard Room",price:16000,guests:2,facilities:"Wi-Fi, resort amenities"},{name:"Family Suite",price:28000,guests:4,facilities:"Family space, resort facilities"}]}]},
  {name:"Dubai Luxury Adventure",destination:"Dubai",country:"United Arab Emirates",days:4,nights:3,price:39999,region:"City",images:["photo-1512453979798-5ea266f8880c","photo-1519608487953-e999c86e7455","photo-1508009603885-50cf7c579365"],places:["Burj Khalifa","Dubai Mall","Dubai Marina","Desert safari with licensed operator"],plan:[["Arrival","Check in and explore nearby sights."],["Downtown Dubai","Visit Dubai Mall and Burj Khalifa; tickets extra unless stated."],["Marina or desert safari","Choose an activity and verify transfer details."],["Departure","Checkout and airport transfer."]],hotels:[{name:"Rove Downtown",area:"Downtown Dubai",type:"Hotel",rooms:[{name:"Rover Room",price:11000,guests:2,facilities:"Wi-Fi, modern room amenities"},{name:"Family Interconnecting Room",price:19500,guests:4,facilities:"Connected rooms subject to availability"}]},{name:"JW Marriott Marquis Dubai",area:"Business Bay, Dubai",type:"Luxury hotel",rooms:[{name:"Deluxe Room",price:24000,guests:2,facilities:"Wi-Fi, hotel amenities"}]}]},
  {name:"Singapore City Explorer",destination:"Singapore",country:"Singapore",days:4,nights:3,price:42999,region:"City",images:["photo-1525625293386-3f8f99389edd","photo-1508964942454-1a56651d54ac","photo-1519608487953-e999c86e7455"],places:["Gardens by the Bay","Marina Bay Sands area","Sentosa Island","Chinatown"],plan:[["Arrival","Check in and explore the local area."],["Gardens by the Bay","Visit gardens; attraction tickets may be extra."],["Sentosa","Plan a day for island attractions."],["Departure","Checkout and airport transfer."]],hotels:[{name:"Hotel Boss",area:"Singapore",type:"Hotel",rooms:[{name:"Superior Room",price:17000,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Family Room",price:26000,guests:4,facilities:"Family layout"}]},{name:"Village Hotel Bugis",area:"Singapore",type:"Hotel",rooms:[{name:"Superior Room",price:21000,guests:2,facilities:"Wi-Fi, hotel amenities"}]}]},
  {name:"Maldives Island Retreat",destination:"Maldives",country:"Maldives",days:4,nights:3,price:54999,region:"Islands",images:["photo-1514282401047-d79a71a590e8","photo-1500375592092-40eb2168fd21","photo-1510414842594-a61c69b5ae57"],places:["Island resort","Lagoon and beaches","Snorkelling with approved operators","Sunset cruise if offered"],plan:[["Arrival and transfer","Transfer method and cost depend on resort location."],["Beach and water activities","Activities depend on weather and resort terms."],["Leisure day","Optional excursions; confirm costs directly."],["Departure","Allow sufficient transfer time for flights."]],hotels:[{name:"Bandos Maldives",area:"North Malé Atoll",type:"Island resort",rooms:[{name:"Standard Beachfront Room",price:30000,guests:2,facilities:"Beach access, resort amenities"},{name:"Water Villa",price:65000,guests:2,facilities:"Overwater accommodation in selected categories"}]},{name:"Meeru Maldives Resort Island",area:"North Malé Atoll",type:"Island resort",rooms:[{name:"Garden Room",price:28000,guests:2,facilities:"Resort facilities, room category dependent"},{name:"Water Front Villa",price:52000,guests:2,facilities:"Waterfront setting, resort amenities"}]}]},
  {name:"Bangkok City Discovery",destination:"Bangkok",country:"Thailand",days:4,nights:3,price:29999,region:"City",images:["photo-1508009603885-50cf7c579365","photo-1504214208698-ea1916a2195a","photo-1528181304800-259b08848526"],places:["Grand Palace area","Wat Arun","Chao Phraya River","Local markets"],plan:[["Arrival","Check in and explore the neighbourhood."],["Temples","Visit Grand Palace area and Wat Arun; check dress rules."],["River and markets","Enjoy the riverfront and markets."],["Departure","Checkout and transfer."]],hotels:[{name:"Novotel Bangkok on Siam Square",area:"Bangkok",type:"Hotel",rooms:[{name:"Superior Room",price:10000,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Family Room",price:16500,guests:4,facilities:"Family layout"}]},{name:"Holiday Inn Bangkok",area:"Bangkok",type:"Hotel",rooms:[{name:"Standard Room",price:11500,guests:2,facilities:"Wi-Fi, hotel amenities"}]}]},
  {name:"Swiss Alps Adventure",destination:"Switzerland",country:"Switzerland",days:6,nights:5,price:89999,region:"Mountains",images:["photo-1531366936337-7c912a4589a7","photo-1464822759023-fed622ff2c3b","photo-1470770841072-f978cf4d019e"],places:["Interlaken","Lauterbrunnen","Lake Brienz","Mountain railways (tickets extra unless stated)"],plan:[["Arrival","Transfer to your booked base town."],["Interlaken","Explore town and lakefront."],["Lauterbrunnen","Visit the valley, subject to local transport."],["Mountain excursion","Check railway and cable-car operations."],["Leisure day","Optional lake or mountain activity."],["Departure","Checkout and transfer."]],hotels:[{name:"Hotel Interlaken",area:"Interlaken, Switzerland",type:"Hotel",rooms:[{name:"Classic Room",price:28000,guests:2,facilities:"Wi-Fi, private bathroom"},{name:"Superior Room",price:36000,guests:2,facilities:"Larger room, Wi-Fi"}]},{name:"ibis Styles Luzern City",area:"Lucerne, Switzerland",type:"Hotel",rooms:[{name:"Standard Room",price:24000,guests:2,facilities:"Wi-Fi, air conditioning may vary"}]}]},
  {name:"London City Holiday",destination:"London",country:"United Kingdom",days:5,nights:4,price:79999,region:"City",images:["photo-1513635269975-59663e0ac1ad","photo-1486299267070-83823f5448dd","photo-1519608487953-e999c86e7455"],places:["Tower Bridge","Buckingham Palace exterior","British Museum","Westminster"],plan:[["Arrival","Check in and explore nearby streets."],["Westminster","Visit central London sights."],["Museums","Choose a museum and check entry requirements."],["Markets and river","Explore local markets and the Thames."],["Departure","Checkout and transfer."]],hotels:[{name:"Premier Inn London County Hall",area:"London, UK",type:"Hotel",rooms:[{name:"Standard Double Room",price:22000,guests:2,facilities:"Private bathroom, Wi-Fi"},{name:"Family Room",price:30000,guests:4,facilities:"Family layout"}]},{name:"The Tower Hotel",area:"London, UK",type:"Hotel",rooms:[{name:"Standard Room",price:28000,guests:2,facilities:"Wi-Fi, views vary by room"}]}]},
  {name:"Tokyo Culture Experience",destination:"Tokyo",country:"Japan",days:5,nights:4,price:69999,region:"Culture",images:["photo-1540959733332-eab4deabeeaf","photo-1513407030348-c983a97b98d8","photo-1503899036084-c55cdd92da26"],places:["Asakusa","Shibuya Crossing","Meiji Shrine","Ueno Park"],plan:[["Arrival","Check in and get familiar with transit."],["Asakusa","Visit historic streets and temple area."],["Shibuya and Harajuku","Explore modern Tokyo."],["Parks and museums","Choose sights based on opening hours."],["Departure","Checkout and transfer."]],hotels:[{name:"Hotel Gracery Shinjuku",area:"Tokyo, Japan",type:"Hotel",rooms:[{name:"Standard Double Room",price:18000,guests:2,facilities:"Wi-Fi, compact city room"},{name:"Twin Room",price:22000,guests:2,facilities:"Two beds, Wi-Fi"}]},{name:"Mitsui Garden Hotel Ueno",area:"Tokyo, Japan",type:"Hotel",rooms:[{name:"Moderate Double Room",price:19000,guests:2,facilities:"Wi-Fi, private bathroom"}]}]},
  {name:"New York City Escape",destination:"New York",country:"United States",days:6,nights:5,price:99999,region:"City",images:["photo-1496588152823-86ff7695e68f","photo-1518391846015-55a9cc003b25","photo-1485871981521-5b1fd3805eee"],places:["Central Park","Times Square","Statue of Liberty (ferry ticket required)","Metropolitan Museum of Art"],plan:[["Arrival","Check in and explore nearby areas."],["Midtown","Visit Times Square and nearby landmarks."],["Central Park","Enjoy the park and museums."],["Harbour excursion","Check ferry tickets and schedules."],["Free day","Explore a neighbourhood of your choice."],["Departure","Checkout and airport transfer."]],hotels:[{name:"Pod 51 Hotel",area:"Manhattan, New York",type:"City hotel",rooms:[{name:"Bunk Pod",price:18000,guests:2,facilities:"Compact room, shared or private bathroom depends on category"},{name:"Queen Pod",price:23000,guests:2,facilities:"Queen bed, room amenities"}]},{name:"Hampton Inn Manhattan/Times Square Central",area:"Manhattan, New York",type:"Hotel",rooms:[{name:"Standard Room",price:35000,guests:2,facilities:"Wi-Fi, hotel amenities"}]}]},
  {name:"Cairo Ancient Wonders",destination:"Cairo",country:"Egypt",days:4,nights:3,price:44999,region:"Heritage",images:["photo-1503177119275-0aa32b3a9368","photo-1539650116574-75c0c6d73f6e","photo-1548013146-72479768bada"],places:["Giza pyramids","Egyptian Museum area","Khan el-Khalili","Nile waterfront"],plan:[["Arrival","Check in and relax."],["Pyramids","Arrange entry and licensed guide if desired."],["Museum and old city","Check museum opening hours."],["Departure","Checkout and transfer."]],hotels:[{name:"Steigenberger Hotel El Tahrir Cairo",area:"Cairo, Egypt",type:"Hotel",rooms:[{name:"Superior Room",price:14000,guests:2,facilities:"Wi-Fi, air conditioning"},{name:"Deluxe Room",price:18500,guests:2,facilities:"Larger room, Wi-Fi"}]},{name:"Marriott Mena House, Cairo",area:"Giza, Egypt",type:"Luxury hotel",rooms:[{name:"Garden Room",price:32000,guests:2,facilities:"Garden setting, hotel amenities"}]}]},
  {name:"Cape Town Scenic Tour",destination:"Cape Town",country:"South Africa",days:5,nights:4,price:64999,region:"Nature",images:["photo-1580060839134-75a5edca2e99","photo-1500530855697-b586d89ba3ee","photo-1470770841072-f978cf4d019e"],places:["Table Mountain","V&A Waterfront","Cape Point","Kirstenbosch Gardens"],plan:[["Arrival","Check in and explore the waterfront."],["Table Mountain","Cableway operation depends on weather."],["Cape Peninsula","Plan a guided or self-drive excursion."],["Gardens and city","Visit gardens and local neighbourhoods."],["Departure","Checkout and transfer."]],hotels:[{name:"Radisson RED Cape Town V&A Waterfront",area:"Cape Town, South Africa",type:"Hotel",rooms:[{name:"Standard Room",price:17000,guests:2,facilities:"Wi-Fi, modern room amenities"},{name:"Superior Room",price:22000,guests:2,facilities:"Extra space, Wi-Fi"}]},{name:"President Hotel",area:"Bantry Bay, Cape Town",type:"Hotel",rooms:[{name:"Classic Room",price:19000,guests:2,facilities:"Hotel amenities, views vary"}]}]}
];

const imageUrl = (photoId, width = 900) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`;
const money = value => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
const byId = id => document.getElementById(id);
const packageList = byId("package-list");
const searchInput = byId("search");
const destinationSelect = byId("destination");
const bookingForm = byId("booking-form");
const messageBox = byId("message");
const emptyMessage = byId("empty-message");
const packageCount = byId("package-count");
const dateInput = byId("date");
let selectedTour = null;
let selectedHotel = null;
let selectedRoom = null;
let activeGalleryIndex = 0;

// Inject styles for the destination-details modal, hotel cards and room selection.
(function addTravelExplorerStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .te-card-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.te-btn{border:0;border-radius:9px;padding:10px 14px;cursor:pointer;font:inherit;font-weight:700;background:#164e63;color:#fff}.te-btn.secondary{background:#e2e8f0;color:#0f172a}.te-modal-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.72);z-index:9998;display:flex;align-items:center;justify-content:center;padding:16px}.te-modal{background:#fff;color:#172033;border-radius:18px;width:min(980px,100%);max-height:92vh;overflow:auto;box-shadow:0 25px 70px rgba(0,0,0,.3)}.te-modal-head{position:sticky;top:0;background:#fff;display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid #e2e8f0;z-index:2}.te-modal-head h2{margin:0;font-size:1.25rem}.te-close{border:0;border-radius:8px;padding:8px 12px;cursor:pointer;font-size:1.1rem}.te-modal-body{padding:20px}.te-gallery{display:grid;grid-template-columns:2fr 1fr;gap:10px;margin-bottom:18px}.te-gallery-main{width:100%;height:300px;object-fit:cover;border-radius:12px}.te-gallery-thumbs{display:grid;gap:10px}.te-gallery-thumbs img{width:100%;height:145px;object-fit:cover;border-radius:12px;cursor:pointer}.te-section{margin:22px 0}.te-section h3{margin:0 0 12px}.te-chips{display:flex;flex-wrap:wrap;gap:8px}.te-chip{background:#e0f2fe;color:#075985;padding:6px 10px;border-radius:999px;font-size:.9rem}.te-itinerary{display:grid;gap:10px}.te-day{padding:12px;border:1px solid #e2e8f0;border-radius:10px}.te-day strong{display:block;margin-bottom:4px}.te-hotel-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px}.te-hotel{border:1px solid #dbe3ee;border-radius:12px;padding:14px}.te-hotel h4{margin:0 0 6px}.te-room{border-top:1px solid #e2e8f0;padding-top:10px;margin-top:10px}.te-room label{display:flex;gap:8px;align-items:flex-start;cursor:pointer}.te-room input{margin-top:5px}.te-small{font-size:.88rem;color:#475569}.te-live-note{padding:12px;border-radius:10px;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412}.te-cost{background:#f1f5f9;border-radius:12px;padding:14px;margin-top:14px}.te-cost p{margin:5px 0}.te-gallery-caption{font-size:.9rem;color:#64748b;margin:6px 0}.te-hotels-link{display:inline-block;margin-top:8px;overflow-wrap:anywhere}.confirmation .welcome-card{padding:18px;border:1px solid #bae6fd;border-radius:14px;background:#f0f9ff}.confirmation-note{font-size:.92rem;color:#9a3412}.te-card-image{width:100%;height:210px;object-fit:cover;border-radius:12px 12px 0 0}.card .te-card-image{display:block}.te-modal [hidden]{display:none!important}@media(max-width:600px){.te-gallery{grid-template-columns:1fr}.te-gallery-main{height:230px}.te-gallery-thumbs{grid-template-columns:1fr 1fr}.te-gallery-thumbs img{height:110px}.te-modal-body{padding:14px}}
  `;
  document.head.appendChild(style);
})();

function populateDestinations() {
  if (!destinationSelect) return;
  const first = destinationSelect.options[0] || new Option("Choose a destination", "");
  destinationSelect.replaceChildren(first);
  tours.forEach(tour => destinationSelect.add(new Option(`${tour.destination} — ${tour.country}`, tour.destination)));
}

function renderTours(query = "") {
  if (!packageList) return;
  const term = query.trim().toLowerCase();
  const filtered = tours.filter(t => `${t.name} ${t.destination} ${t.country} ${t.region} ${t.places.join(" ")}`.toLowerCase().includes(term));
  packageList.replaceChildren();
  if (packageCount) packageCount.textContent = `${filtered.length} tour${filtered.length === 1 ? "" : "s"}`;
  if (emptyMessage) emptyMessage.hidden = filtered.length > 0;

  filtered.forEach(tour => {
    const card = document.createElement("article");
    card.className = "card";
    const img = document.createElement("img");
    img.className = "te-card-image";
    img.src = imageUrl(tour.images[0], 900);
    img.alt = `${tour.destination}, ${tour.country}`;
    img.loading = "lazy";
    img.onerror = () => { img.alt = `Photo unavailable for ${tour.destination}`; img.style.background = "#e2e8f0"; };
    const title = document.createElement("h3"); title.textContent = tour.name;
    const location = document.createElement("p"); location.textContent = `📍 ${tour.destination}, ${tour.country}`;
    const duration = document.createElement("p"); duration.textContent = `🗓 ${tour.days} days / ${tour.nights} nights`;
    const price = document.createElement("p"); price.className = "price"; price.textContent = `From ${money(tour.price)} per person*`;
    const actions = document.createElement("div"); actions.className = "te-card-actions";
    const detailsBtn = document.createElement("button"); detailsBtn.className = "te-btn"; detailsBtn.type = "button"; detailsBtn.textContent = "View places, hotels & rooms"; detailsBtn.addEventListener("click", () => openTourDetails(tour));
    const planBtn = document.createElement("button"); planBtn.className = "te-btn secondary"; planBtn.type = "button"; planBtn.textContent = "Request this tour"; planBtn.addEventListener("click", () => chooseTourForBooking(tour));
    actions.append(detailsBtn, planBtn);
    const disclaimer = document.createElement("p"); disclaimer.className = "te-small"; disclaimer.textContent = "*Illustrative tour estimate, not a live quote.";
    card.append(img, title, location, duration, price, actions, disclaimer);
    packageList.appendChild(card);
  });
}

function openModal(title) {
  closeModal();
  const backdrop = document.createElement("div"); backdrop.className = "te-modal-backdrop"; backdrop.id = "te-modal-backdrop";
  backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
  const modal = document.createElement("section"); modal.className = "te-modal"; modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true"); modal.setAttribute("aria-label", title);
  const header = document.createElement("div"); header.className = "te-modal-head";
  const h = document.createElement("h2"); h.textContent = title;
  const close = document.createElement("button"); close.className = "te-close"; close.type = "button"; close.textContent = "Close ✕"; close.addEventListener("click", closeModal);
  header.append(h, close);
  const body = document.createElement("div"); body.className = "te-modal-body"; body.id = "te-modal-body";
  modal.append(header, body); backdrop.appendChild(modal); document.body.appendChild(backdrop);
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleModalEscape);
  close.focus();
  return body;
}
function handleModalEscape(e) { if (e.key === "Escape") closeModal(); }
function closeModal() {
  const modal = document.getElementById("te-modal-backdrop");
  if (modal) modal.remove();
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleModalEscape);
}
function section(parent, title) {
  const wrap = document.createElement("section"); wrap.className = "te-section";
  const h = document.createElement("h3"); h.textContent = title; wrap.appendChild(h); parent.appendChild(wrap); return wrap;
}
function openTourDetails(tour) {
  selectedTour = tour; selectedHotel = null; selectedRoom = null; activeGalleryIndex = 0;
  const body = openModal(`${tour.destination}: destination guide`);
  const note = document.createElement("div"); note.className = "te-live-note";
  note.textContent = "Availability notice: destination details and sample hotel/room prices below are illustrative planning data. This page is not connected to a live hotel inventory system. Use the hotel-search link to check current availability and rates.";
  body.appendChild(note);

  const gallery = document.createElement("div"); gallery.className = "te-gallery";
  const main = document.createElement("img"); main.className = "te-gallery-main"; main.src = imageUrl(tour.images[0], 1200); main.alt = `${tour.destination} destination photo`;
  const thumbs = document.createElement("div"); thumbs.className = "te-gallery-thumbs";
  tour.images.slice(1, 3).forEach((id, index) => {
    const im = document.createElement("img"); im.src = imageUrl(id, 500); im.alt = `${tour.destination} gallery photo ${index + 2}`; im.tabIndex = 0;
    const selectImage = () => { main.src = imageUrl(id, 1200); activeGalleryIndex = index + 1; };
    im.addEventListener("click", selectImage); im.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") selectImage(); }); thumbs.appendChild(im);
  });
  gallery.append(main, thumbs); body.appendChild(gallery);
  const caption = document.createElement("p"); caption.className = "te-gallery-caption"; caption.textContent = "Destination photo gallery. Images are illustrative and may not represent a specific hotel room."; body.appendChild(caption);

  const placesSection = section(body, "Places you can visit");
  const chips = document.createElement("div"); chips.className = "te-chips";
  tour.places.forEach(place => { const chip = document.createElement("span"); chip.className = "te-chip"; chip.textContent = place; chips.appendChild(chip); });
  placesSection.appendChild(chips);

  const itinerary = section(body, `Suggested ${tour.days}-day itinerary`); itinerary.classList.add("te-itinerary");
  tour.plan.forEach((day, i) => { const item = document.createElement("div"); item.className = "te-day"; const strong = document.createElement("strong"); strong.textContent = `Day ${i + 1}: ${day[0]}`; const p = document.createElement("p"); p.textContent = day[1]; item.append(strong, p); itinerary.appendChild(item); });

  const hotelSection = section(body, "Hotel suggestions and room options");
  const hotelNotice = document.createElement("p"); hotelNotice.className = "te-small"; hotelNotice.textContent = "These are example accommodation options for planning, not confirmed allocations. Room names, facilities, rates and taxes can change; verify directly before paying."; hotelSection.appendChild(hotelNotice);
  const grid = document.createElement("div"); grid.className = "te-hotel-grid";
  tour.hotels.forEach((hotel, hotelIndex) => {
    const box = document.createElement("article"); box.className = "te-hotel";
    const h = document.createElement("h4"); h.textContent = hotel.name;
    const area = document.createElement("p"); area.className = "te-small"; area.textContent = `${hotel.type} · ${hotel.area}`;
    box.append(h, area);
    const searchLink = document.createElement("a"); searchLink.className = "te-hotels-link"; searchLink.target = "_blank"; searchLink.rel = "noopener noreferrer"; searchLink.href = `https://www.google.com/travel/search?q=${encodeURIComponent(hotel.name + " " + hotel.area)}`; searchLink.textContent = "Check hotel details and current rates ↗";
    box.appendChild(searchLink);
    hotel.rooms.forEach((room, roomIndex) => {
      const roomBox = document.createElement("div"); roomBox.className = "te-room";
      const label = document.createElement("label");
      const radio = document.createElement("input"); radio.type = "radio"; radio.name = "te-room-choice"; radio.value = `${hotelIndex}-${roomIndex}`;
      radio.addEventListener("change", () => { selectedHotel = hotel; selectedRoom = room; renderEstimate(body, tour, hotel, room); });
      const info = document.createElement("span");
      const roomName = document.createElement("strong"); roomName.textContent = room.name;
      const roomPrice = document.createElement("div"); roomPrice.textContent = `${money(room.price)} per room / night (sample estimate)`;
      const roomCapacity = document.createElement("div"); roomCapacity.className = "te-small"; roomCapacity.textContent = `Up to ${room.guests} guest(s) · ${room.facilities}`;
      info.append(roomName, roomPrice, roomCapacity); label.append(radio, info); roomBox.appendChild(label); box.appendChild(roomBox);
    });
    grid.appendChild(box);
  });
  hotelSection.appendChild(grid);
  const estimate = document.createElement("div"); estimate.id = "te-cost-estimate"; estimate.className = "te-cost"; estimate.textContent = "Select a room to calculate an illustrative accommodation estimate."; body.appendChild(estimate);
  const bottom = document.createElement("div"); bottom.className = "te-card-actions";
  const request = document.createElement("button"); request.type = "button"; request.className = "te-btn"; request.textContent = "Continue to tour request"; request.addEventListener("click", () => { closeModal(); chooseTourForBooking(tour); });
  const liveSearch = document.createElement("a"); liveSearch.className = "te-btn secondary"; liveSearch.target = "_blank"; liveSearch.rel = "noopener noreferrer"; liveSearch.href = `https://www.google.com/travel/search?q=${encodeURIComponent("hotels in " + tour.destination + " " + tour.country)}`; liveSearch.textContent = "Search live hotel options ↗"; liveSearch.style.textDecoration = "none";
  bottom.append(request, liveSearch); body.appendChild(bottom);
}
function renderEstimate(modalBody, tour, hotel, room) {
  const box = document.getElementById("te-cost-estimate"); if (!box) return;
  const people = Math.max(1, Number(byId("travelers")?.value || 2));
  const roomsNeeded = Math.max(1, Math.ceil(people / room.guests));
  const nights = tour.nights;
  const accommodation = room.price * nights * roomsNeeded;
  const tourEstimate = tour.price * people;
  box.replaceChildren();
  const title = document.createElement("strong"); title.textContent = "Illustrative cost estimate";
  const line1 = document.createElement("p"); line1.textContent = `Hotel: ${hotel.name} — ${room.name}`;
  const line2 = document.createElement("p"); line2.textContent = `Accommodation: ${roomsNeeded} room(s) × ${nights} night(s) × ${money(room.price)} = ${money(accommodation)}`;
  const line3 = document.createElement("p"); line3.textContent = `Sample tour estimate: ${people} traveller(s) × ${money(tour.price)} = ${money(tourEstimate)}`;
  const total = document.createElement("p"); total.textContent = `Estimated subtotal: ${money(accommodation + tourEstimate)}`;
  const disclaimer = document.createElement("p"); disclaimer.className = "te-small"; disclaimer.textContent = "This subtotal is only a planning estimate. It may exclude taxes, flights, transfers, meals, activities and hotel-specific charges. It is not a live quote.";
  box.append(title, line1, line2, line3, total, disclaimer);
}
function chooseTourForBooking(tour) {
  selectedTour = tour;
  if (destinationSelect) destinationSelect.value = tour.destination;
  const booking = byId("booking");
  if (booking) booking.scrollIntoView({ behavior: "smooth", block: "start" });
  if (messageBox) { messageBox.hidden = true; messageBox.replaceChildren(); }
  if (dateInput) dateInput.focus({ preventScroll: true });
}
function setMinimumDate() {
  if (!dateInput) return;
  const now = new Date();
  dateInput.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
function makeConfirmation(details) {
  if (!messageBox) return;
  messageBox.replaceChildren();
  const card = document.createElement("div"); card.className = "welcome-card";
  const h = document.createElement("h2"); h.textContent = `✈ Thank you, ${details.name}!`;
  const intro = document.createElement("p"); intro.textContent = "Your travel request summary is ready.";
  const ref = document.createElement("p"); ref.textContent = `Local reference: TE-${Date.now().toString().slice(-8)}`;
  const detailsList = document.createElement("ul");
  const rows = [
    `Destination: ${details.tour.destination}, ${details.tour.country}`,
    `Suggested duration: ${details.tour.days} days / ${details.tour.nights} nights`,
    `Travel date: ${details.date}`,
    `Travellers: ${details.travelers}`,
    `Indicative tour estimate: ${money(details.tour.price * details.travelers)}`,
    `Contact email: ${details.email}`
  ];
  if (details.room && details.hotel) rows.push(`Selected sample room: ${details.room.name} at ${details.hotel.name}`);
  rows.forEach(text => { const li = document.createElement("li"); li.textContent = text; detailsList.appendChild(li); });
  const note = document.createElement("p"); note.className = "confirmation-note"; note.textContent = "IMPORTANT: This is only a request summary displayed in this browser. No hotel room has been reserved, no live availability was verified, no payment was taken, and no email was sent. Contact the hotel/provider using the live-search links to confirm the actual rate and availability.";
  card.append(h, intro, ref, detailsList, note); messageBox.appendChild(card); messageBox.hidden = false;
  messageBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

if (bookingForm) {
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;
    const name = byId("name")?.value.trim() || "Traveller";
    const email = byId("email")?.value.trim() || "";
    const destination = destinationSelect?.value || "";
    const date = dateInput?.value || "";
    const travelers = Number(byId("travelers")?.value || 1);
    const tour = tours.find(t => t.destination === destination) || selectedTour;
    if (!tour) { alert("Please select a destination."); return; }
    if (!date || (dateInput?.min && date < dateInput.min)) { alert("Please choose today or a future travel date."); return; }
    if (!Number.isInteger(travelers) || travelers < 1 || travelers > 10) { alert("Please select between 1 and 10 travellers."); return; }
    makeConfirmation({ name, email, destination, date, travelers, tour, hotel: selectedHotel, room: selectedRoom });
    bookingForm.reset(); setMinimumDate();
  });
}
if (searchInput) searchInput.addEventListener("input", () => renderTours(searchInput.value));

const menuToggle = byId("menu-toggle");
const mainNav = byId("main-nav");
if (menuToggle && mainNav) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.textContent = open ? "✕" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.setAttribute("aria-label", "Open navigation"); menuToggle.textContent = "☰";
  }));
}
const backToTop = byId("back-to-top");
if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

populateDestinations();
setMinimumDate();
renderTours();
