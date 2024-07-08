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