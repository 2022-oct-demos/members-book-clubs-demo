// import { createMember, getBookClubs } from '../fetch-utils.js';

// const selectEl = document.querySelector('select');
// const form = document.querySelector('form');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const data = new FormData(form);
//     // match grabbed data with associated name attr
//     const name = data.get('name');
//     const contact = data.get('contact');
//     const clubId = data.get('club-id');

//     await createMember({
//         name: name,
//         contact_info: contact,
//         club_id: clubId,
//     });
// });

// window.addEventListener('load', async () => {
//     const clubs = await getBookClubs();

//     for (let club of clubs) {
//         const clubOption = document.createElement('option');

//         clubOption.textContent = club.name;
//         clubOption.value = club.id;

//         selectEl.append(clubOption);
//     }
// });
