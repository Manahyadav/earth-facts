document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Earth is the third planet from the Sun.",
        "Earth is the only planet known to support life.",
        "70% of Earth's surface is covered by water.",
        "Earth's atmosphere is composed of 78% nitrogen and 21% oxygen.",
        "Earth has one natural satellite: the Moon.",
        "The Earth's rotation is gradually slowing.",
        "Earth's magnetic field protects it from solar wind.",
        "The Earth is about 4.5 billion years old.",
        "Earth's core is as hot as the surface of the Sun.",
        "Earth is the densest planet in the Solar System."
    ];

    const factsList = document.getElementById('facts-list');
    const newFactInput = document.getElementById('new-fact');
    const addFactButton = document.getElementById('add-fact');

    function renderFacts() {
        factsList.innerHTML = ''; // Clear the list
        facts.forEach((fact, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = fact;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                facts.splice(index, 1);
                renderFacts();
            });
            listItem.appendChild(deleteButton);
            factsList.appendChild(listItem);
        });
    }

    addFactButton.addEventListener('click', () => {
        const newFact = newFactInput.value.trim();
        if (newFact) {
            facts.push(newFact);
            newFactInput.value = ''; // Clear the input
            renderFacts();
        }
    });

    renderFacts(); // Initial render
});
