// Array of dialogue information (IDs and corresponding name box text)
const dialogues = [
    { id: 'dialogue-1', name: '...' },
    { id: 'dialogue-2', name: 'You' },
    { id: 'dialogue-3', name: '...' },
    { id: 'dialogue-4', name: 'You' },
    { id: 'dialogue-5', name: 'You' },
    { id: 'dialogue-6', name: 'Rina' },
    { id: 'dialogue-7', name: 'You' },
    { id: 'dialogue-8', name: '...' },
    { id: 'dialogue-9', name: 'You' },
    { id: 'dialogue-10', name: 'Rina' },
    { id: 'dialogue-11', name: 'You' },
    { id: 'dialogue-12', name: '...' },
    { id: 'dialogue-13', name: 'Rina' },
    { id: 'dialogue-14', name: '...' }
];

let currentDialogueIndex = 0; // Keep track of the current dialogue

// Get the audio element
const dialogueAudio = document.getElementById('dialogueAudio');

// Function to update dialogue and name box
function updateDialogue() {
    const nameBox = document.getElementById("nameBox");
    const characterImage = document.getElementById("characterImage");

    // Hide all dialogue lines
    dialogues.forEach(dialogue => {
        document.getElementById(dialogue.id).style.display = 'none';
    });

    // Show the current dialogue line and update the name box
    const currentDialogue = dialogues[currentDialogueIndex];
    document.getElementById(currentDialogue.id).style.display = 'block';
    nameBox.textContent = currentDialogue.name;

    // Trigger character image animation at dialogue ID 3 (index 2 in the array)
    if (currentDialogueIndex === 2) {
        characterImage.style.transform = 'translateX(-100px)'; // Slide in further, adjust this value
        characterImage.style.opacity = '1'; // Fade in
    }

    // Change character image at dialogue ID 5 (index 4 in the array)
    if (currentDialogueIndex === 4) {
        characterImage.style.opacity = '0'; // Fade out the current image
        setTimeout(() => {
            characterImage.src = 'https://i.imgur.com/tchqUol.png'; // Change the source to the new image
            characterImage.style.opacity = '1'; // Fade in the new image
        }, 500); // Wait for the fade-out to complete before switching the image
    }

    // Change character image at dialogue ID 6 (index 5 in the array)
    if (currentDialogueIndex === 5) {
        characterImage.style.opacity = '0'; // Fade out the current image
        setTimeout(() => {
            characterImage.src = 'https://i.imgur.com/vzehf4d.png'; // Change the source to the new image
            characterImage.style.opacity = '1'; // Fade in the new image
        }, 500); // Wait for the fade-out to complete before switching the image

        // Play audio when dialogue ID 6 is reached
        dialogueAudio.currentTime = 0; // Reset the audio to the start
        dialogueAudio.play();
    }

    // Change character image at dialogue ID 10 (index 9 in the array)
    if (currentDialogueIndex === 9) {
        characterImage.style.opacity = '0'; // Fade out the current image
        setTimeout(() => {
            characterImage.src = 'https://i.imgur.com/p6mjod7.png'; // Change the source to the new image
            characterImage.style.opacity = '1'; // Fade in the new image
        }, 500); // Wait for the fade-out to complete before switching the image
    }

    // Change character image at dialogue ID 12 (index 11 in the array)
    if (currentDialogueIndex === 11) {
        characterImage.style.opacity = '0'; // Fade out the current image
        setTimeout(() => {
            characterImage.src = 'https://i.imgur.com/17WBATu.png'; // Change the source to the new image
            characterImage.style.opacity = '1'; // Fade in the new image
        }, 500); // Wait for the fade-out to complete before switching the image
    }

    // Play audio when dialogue ID 13 is reached
    if (currentDialogueIndex === 12) {
        dialogueAudio.currentTime = 0; // Reset the audio to the start
        dialogueAudio.play();
    }

    // Apply faded effect at dialogue ID 14 (index 13 in the array)
    if (currentDialogueIndex === 13) {
        characterImage.classList.add('faded'); // Add the faded class
    }
}

// Event listener to switch dialogue on click
document.getElementById("dialogueBox").addEventListener("click", function() {
    // Increment dialogue index only if we haven't reached the last dialogue
    if (currentDialogueIndex < dialogues.length - 1) {
        currentDialogueIndex++;
        updateDialogue(); // Update dialogue and name box
    }
});

// Initialize the first dialogue when the page loads
window.addEventListener('load', function() {
    updateDialogue();
});