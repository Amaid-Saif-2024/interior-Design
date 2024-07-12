from flask import flask, request, jsonify, rendor_templates
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'

# Predefined suggestins foir each feature
Suggestions = {
    'furniture': [
        'static/suggestions/furniture_room_1.png',
        'static/suggestions/furniture_room_2.png',
        'static/suggestions/furniture_room_3.png',
        'static/suggestions/living_room_1.png',
        'static/suggestions/living_room_2.png',
        'static/suggestions/living_room_3.png',
    ],
    'paint': [
        'static/suggestions/paint_3.jpeg',
        'static/suggestions/paint_5.jpeg',
        'static/suggestions/paint_gray.jpeg',
    ],
     'windows': [
         'static/suggestions/windows_3.webp',
         'static/suggestions/windows_4.webp',
         'static/suggestions/windows_5.webp',
         'static/suggestions/windows_6.jpeg',
         'static/suggestions/windows_7.jpeg',
         'static/suggestions/windows_8.jpeg',
         'static/suggestions/windows_10.jpeg',
         'static/suggestions/windows_image_2.jpeg',
     ],
     'tiles': [
         'static/suggestions/floor_tiles_1.jpg',
         'static/suggestions/floor_tiles_2.jpg',
         'static/suggestions/floor_tiles_3.jpg',
         'static/suggestions/floor_tiles_4.jpg',
         'static/suggestions/floor_tiles_5.jpg',
         'static/suggestions/floor_tiles_6.jpg',
         'static/suggestions/floor_tiles_7.jpg',
         'static/suggestions/floor_tiles_8.jpg',
         'static/suggestions/wooden_floor_1.jpg',
         'static/suggestions/wooden_floor_2.jpg',
         'static/suggestions/wooden_floor_3.jpg',
         'static/suggestions/wooden_floor_4.jpg',
     ]  
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about-us')
def about_us():
    return render_template('about_us.html')

@app.route('/ipload', methods=['post'])
def upload():
    file = request.files['files']
    lenght = request.form['lenght']
    width = request.form['width']
    feature = request.form['feature']

    if file:
        filename = file.filename
        filepath = os.path.join(app.cinfig['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        return jsonify({'suggestions': suggestions.get(feature[])})
    else:
        return jsonify({'message': 'No file uploaded'}), 400
    if__name__ == '__main__':
    app.run(debug=True)