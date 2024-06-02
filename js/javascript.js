// Data catatan Anda
const notesData = [
  {
    id: 'notes-jT-jjsyz61J8XKiI',
    title: 'Welcome to Notes, Dimas!',
    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
    createdAt: '2022-07-28T10:03:12.594Z',
    archived: false,
  },
  {
    id: 'notes-aB-cdefg12345',
    title: 'Meeting Agenda',
    body: 'Discuss project updates and assign tasks for the upcoming week.',
    createdAt: '2022-08-05T15:30:00.000Z',
    archived: false,
  },
  {
    id: 'notes-XyZ-789012345',
    title: 'Shopping List',
    body: 'Milk, eggs, bread, fruits, and vegetables.',
    createdAt: '2022-08-10T08:45:23.120Z',
    archived: false,
  },
  {
    id: 'notes-1a-2b3c4d5e6f',
    title: 'Personal Goals',
    body: 'Read two books per month, exercise three times a week, learn a new language.',
    createdAt: '2022-08-15T18:12:55.789Z',
    archived: false,
  },
  {
    id: 'notes-LMN-456789',
    title: 'Recipe: Spaghetti Bolognese',
    body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
    createdAt: '2022-08-20T12:30:40.200Z',
    archived: false,
  },
  {
    id: 'notes-QwErTyUiOp',
    title: 'Workout Routine',
    body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
    createdAt: '2022-08-25T09:15:17.890Z',
    archived: false,
  },
  {
    id: 'notes-abcdef-987654',
    title: 'Book Recommendations',
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: '2022-09-01T14:20:05.321Z',
    archived: false,
  },
  {
    id: 'notes-zyxwv-54321',
    title: 'Daily Reflections',
    body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
    createdAt: '2022-09-07T20:40:30.150Z',
    archived: false,
  },
  {
    id: 'notes-poiuyt-987654',
    title: 'Travel Bucket List',
    body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
    createdAt: '2022-09-15T11:55:44.678Z',
    archived: false,
  },
  {
    id: 'notes-asdfgh-123456',
    title: 'Coding Projects',
    body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
    createdAt: '2022-09-20T17:10:12.987Z',
    archived: false,
  },
  {
    id: 'notes-5678-abcd-efgh',
    title: 'Project Deadline',
    body: 'Complete project tasks by the deadline on October 1st.',
    createdAt: '2022-09-28T14:00:00.000Z',
    archived: false,
  },
  {
    id: 'notes-9876-wxyz-1234',
    title: 'Health Checkup',
    body: 'Schedule a routine health checkup with the doctor.',
    createdAt: '2022-10-05T09:30:45.600Z',
    archived: false,
  },
  {
    id: 'notes-qwerty-8765-4321',
    title: 'Financial Goals',
    body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
    createdAt: '2022-10-12T12:15:30.890Z',
    archived: false,
  },
  {
    id: 'notes-98765-54321-12345',
    title: 'Holiday Plans',
    body: 'Research and plan for the upcoming holiday destination.',
    createdAt: '2022-10-20T16:45:00.000Z',
    archived: false,
  },
  {
    id: 'notes-1234-abcd-5678',
    title: 'Language Learning',
    body: 'Practice Spanish vocabulary for 30 minutes every day.',
    createdAt: '2022-10-28T08:00:20.120Z',
    archived: false,
  },
];


// Fungsi untuk menambahkan catatan ke DOM dan local storage
function addNoteToDOM(title, desc) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${title}</h2>
    <p class="ptag">${desc}</p>
    <div class="button-container">
      <button class="del">Del</button>
      <button class="ed">Edit</button>
    </div>`;
  notesElem.appendChild(card);
}

// Inisialisasi catatan dari data yang telah disediakan
const notesElem = document.getElementById('notes');
notesData.forEach(note => {
  addNoteToDOM(note.title, note.body);
});

// Event listener untuk tombol submit
const submit = document.querySelector(".submit");
const titleInput = document.querySelector("#text");
const descInput = document.querySelector('#desc');

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (titleInput.value && descInput.value) {
    addNoteToDOM(titleInput.value, descInput.value);
    notesData.push({ title: titleInput.value, body: descInput.value });
    // Tidak ada penggunaan localStorage di sini karena data catatan sudah disediakan dalam kode
    titleInput.value = '';
    descInput.value = '';
  }
});

// Fungsi untuk mengedit catatan
function editNote(oldTitle, newTitle, newDesc) {
  let index = notesData.findIndex(note => note.title === oldTitle);
  if (index !== -1) {
    notesData[index] = { title: newTitle, body: newDesc };
    // Tidak ada penggunaan localStorage di sini karena data catatan sudah disediakan dalam kode
    return true;
  }
  return false;
}

// Fungsi untuk menghapus catatan
function deleteNote(title) {
  notesData = notesData.filter(note => note.title !== title);
  // Tidak ada penggunaan localStorage di sini karena data catatan sudah disediakan dalam kode
}

// Event delegation untuk tombol delete dan edit
notesElem.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    const title = e.target.closest(".card").querySelector("h2").innerText;
    if (confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
      e.target.closest(".card").remove();
      deleteNote(title);
    }
  } else if (e.target.classList.contains('ed')) {
    const card = e.target.closest(".card");
    const oldTitle = card.querySelector("h2").innerText;
    const oldDesc = card.querySelector(".ptag").innerText;
    let newTitle = prompt("Masukkan judul baru:", oldTitle);
    let newDesc = prompt("Masukkan deskripsi baru:", oldDesc);
    if (newTitle && newDesc) {
      let isEdited = editNote(oldTitle, newTitle, newDesc);
      if (isEdited) {
        card.querySelector("h2").innerText = newTitle;
        card.querySelector(".ptag").innerText = newDesc;
      } else {
        alert("Catatan tidak ditemukan.");
      }
    }
  }
});
