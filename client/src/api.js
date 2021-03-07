const url = '/api/guests';

// Get data for all guests
async function getAllData() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }
  return res.json();
}

// Get data for one guest
async function getOneData({ queryKey }) {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;

  const res = await fetch(`${url}/${id}`);
  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }
  return res.json();
}

// Post data for one guest
async function postData(data) {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Unable to post data.');
  }
  return res.json();
}

// Delete guest
async function deleteData(id) {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Unable to delete data.');
  }
  return res.json();
}

// Update one guest's data
async function updateData({ id, ...data }) {
  const res = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Unable to delete data.');
  }
  return res.json();
}

// Download guest photo
async function uploadPhoto(formData) {
  const res = await fetch('/api/guests/upload', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Unable to upload photo.');
  }

  return res.json();
}

export {
  getAllData,
  getOneData,
  postData,
  deleteData,
  updateData,
  uploadPhoto,
};
