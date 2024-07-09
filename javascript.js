//document.getElementById('get-started-btn').addEventLitener('click, function() {
//document.getElementById('description-section').style.display = 'none';
//document.getElementById('form-section').style.display = 'block';
// });

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
    formData.append ()