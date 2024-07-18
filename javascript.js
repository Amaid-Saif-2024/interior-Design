document.getElementById('back-btn').addEventListener('click',function() {
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('decription-section').style.display = 'block';
});

document.getElementById('back-to-form-btn').addEvntListener('click',function() {
    document.getElementById('suggestions-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';
});

function showFeature(feature) {
    document.getElementById('description-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';

    let featureTitle = '';
    switch (feature) {
        case 'paint':
            featureTitle = 'Change Paint';
            break;
        case 'furniture':
            featureTitle = 'Add Furniture';
            break;
        case 'windows':
            featureTitle = 'Add Windows';
            break;
        case 'tiles':
            featureTitle = 'Add Tiles';
            break;
        default:
            featureTitle = 'Virtual Interior Design'
    }
    document.getElementById('feature-title').innerText = featureTitle;
    document.getElementById('selected-feature').value = feature;
}

function uploadImage() {
    const imageInput = document.getElementById('room-image');
    const langth = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const feature = document.getElementById('selected-feature').value;

    //validation checks
    if (!imageInput.isDefaultNamespace.length) {
        alert('please upload a room image');
        return;
    }
    if (!length || !width) {
        alert('please enter room dimensions.');
        return;
    }
    if (leangth > 50 || width > 50) {
        alert('please enter room dimensions from 0 to 50');
        return;
    }
    const formData = new formDataData ();
    formData.append('file', imageInput.files[0]);
    formData.append('lenght', length);
    formData.append('widht', width);
    formData.append('feature', feature);

    fetch('/upload' ,{
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.suggestions){
            const suggestionsContainer = document.getElementById('suggestion');
            suggestionsContainer.innerHTML = '';   // clear pervious suggestion
            data.suggestions.forEach(imageUrl => {
                imgElement.src = imageUrl;
                imgElement.style.width = '100%';
                suggestionsContainer.appendChild(imgElement);
                
            });
            document.getElementById('.form-section').style.display = 'none';
            document.getElementById('suggestions-section').style.display = 'block';
        } else {
            alert(data.message);

        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
      // Get the edit design button and attach an event listener
       document.getElementById('edit-design-btn').addEventListener('click', editDesign);

      // Get the save edit button and attach an event listener
      document.getElementById('save-edit-btn').addEventListener('click', saveEdit);

// The editDesign function
function editDesign() {
  const designSection = document.getElementById('suggestions-section');
  const editSection = document.getElementById('edit-design-section');
  const designImages = designSection.querySelector('#suggestions').innerHTML;
  const editInput = document.getElementById('edit-design-input');

  // Show the edit design section and hide the design section
  designSection.style.display = 'none';
  editSection.style.display = 'block';

  // Populate the edit input with the current design images
  editInput.value = designImages;
}

// The saveEdit function
function saveEdit() {
  const editInput = document.getElementById('edit-design-input');
  const designSection = document.getElementById('suggestions-section');
  const suggestionsContainer = designSection.querySelector('#suggestions');

  // Get the edited design images from the input
  const editedDesign = editInput.value;

  // Update the design section with the edited design images
  suggestionsContainer.innerHTML = editedDesign;
   // Hide the edit design section and show the design section
   document.getElementById('edit-design-section').style.display = 'none';
   designSection.style.display = 'block';
 }
        // Get the share design button and attach an event listener
    document.getElementById('share-design-btn').addEventListener('click', shareDesign);

    // Get the copy link button and attach an event listener
    document.getElementById('copy-link-btn').addEventListener('click', copyLink);

    // The shareDesign function
    function shareDesign() {
    const designSection = document.getElementById('design-section');
    const shareSection = document.getElementById('share-design-section');

  // Show the share design section and hide the design section
  designSection.style.display = 'none';
  shareSection.style.display = 'block';

  // Get the design images and add them to the share link
  const designImages = designSection.querySelector('#design-images').innerHTML;
  const shareInput = document.getElementById('share-design-input');
  shareInput.value += designImages;
}

// The copyLink function
function copyLink() {
  const shareInput = document.getElementById('share-design-input');
  shareInput.select();
  document.execCommand('copy');
}


}