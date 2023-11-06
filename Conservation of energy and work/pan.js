// pan.js

let audioContext;
let analyser;
let dataArray;
let volumeThreshold = 128; // Adjust this threshold for bass drops

function initializeAudioAnalysis(shapes) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    const audioElement = document.createElement('audio');
    audioElement.src = 'path/to/your/audio/file.mp3'; // Replace with the path to your audio file
    const source = audioContext.createMediaElementSource(audioElement);

    source.connect(analyser);
    analyser.connect(audioContext.destination);
    audioElement.play();

    // Start the animation loop when audio is playing
    audioElement.addEventListener('play', () => {
        animate(shapes);
    });

    // Add event listener for audio analysis
    audioElement.addEventListener('timeupdate', () => {
        analyser.getByteFrequencyData(dataArray);

        // Check for bass drops and set shape velocities to zero
        const bassDrop = dataArray.some(value => value > volumeThreshold);
        if (bassDrop) {
            shapes.forEach(shape => {
                shape.velocity.x = 0;
                shape.velocity.y = 0;
            });
        }
    });
}

// Your existing 'shapes' array from the previously loaded file will be used to manage shapes

function animate(shapes) {
    // Your existing animation loop
    // Modify shape velocities based on audio analysis
    if (analyser) {
        analyser.getByteFrequencyData(dataArray);

        // Adjust shape velocities based on audio data
        shapes.forEach(shape => {
            // Example: Increase shape velocity based on audio data
            shape.velocity.x += (dataArray[0] / 128) - 1; // Adjust as needed
            shape.velocity.y += (dataArray[0] / 128) - 1; // Adjust as needed
        });
    }

    requestAnimationFrame(() => animate(shapes));
}

// Call the initializeAudioAnalysis function with the 'shapes' array to set up audio analysis
initializeAudioAnalysis(shapes);
