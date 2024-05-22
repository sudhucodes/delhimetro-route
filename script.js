document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const closeBtn = document.querySelector('.close-btn');
    const nav = document.querySelector('nav');

    toggleBtn.addEventListener('click', () => {
        nav.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});


// Add this to your script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput1 = document.getElementById('searchInput1');
    const searchResults = document.querySelector('.search-results');

    const items = [
        "Adarsh Nagar", "AIIMS", "Akshardham", "Anand Vihar", "Arjan Garh", "Ashok Park Main", "Azadpur", "Badarpur", "Botanical Garden", "Central Secretariat", "Chandni Chowk", "Chawri Bazar", "Chhattarpur", "Civil Lines", "Dhaula Kuan", "Dilshad Garden", "Dwarka", "Golf Course", "Govind Puri", "Greater Kailash", "Green Park", "Guru Dronacharya", "Hauz Khas", "INA", "Inderlok", "Jahangirpuri", "Janakpuri West", "Jangpura", "Jasola Vihar Shaheen Bagh", "Jhandewalan", "Jhil Mil", "Jor Bagh", "Kailash Colony", "Kalkaji Mandir", "Kanhaiya Nagar", "Karkarduma", "Karol Bagh", "Kashmere Gate", "Kaushambi", "Kirti Nagar", "Kohat Enclave", "Lajpat Nagar", "Laxmi Nagar", "Malviya Nagar", "Mandi House", "Mayur Vihar-I", "Moolchand", "Moti Nagar", "Mundka", "Nangloi", "Nangloi Railway Station", "Nawada", "Neelam Chowk Ajronda", "Netaji Subhash Place", "New Ashok Nagar", "New Delhi", "Nirman Vihar", "Noida City Centre", "Noida Electronic City", "Okhla", "Paschim Vihar West", "Patel Chowk", "Peeragarhi", "Pitam Pura", "Pragati Maidan", "Pratap Nagar", "Pul Bangash", "Punjabi Bagh", "Rajdhani Park", "Rajendra Place", "Rajiv Chowk", "Ramesh Nagar", "Rithala", "RK Ashram Marg", "Rohini East", "Rohini West", "Saket", "Sarai", "Satguru Ramsingh Marg", "Seelampur", "Shadipur", "Shahdara", "Shastri Nagar", "Shastri Park", "Shivaji Park", "Sikandarpur", "South Extension", "Subhash Nagar", "Sultanpur", "Surajmal Stadium", "Tagore Garden", "Tikri Border", "Tilak Nagar", "Tis Hazari", "Tughlakabad", "Udyog Bhawan", "Udyog Nagar", "Uttam Nagar East", "Uttam Nagar West", "Vaishali", "Vidhan Sabha", "Vishwavidyalaya", "Welcome", "Yamuna Bank"
    ];

    let filteredItems = []; // Initialize filtered items array

    searchInput1.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        filteredItems = items.filter(item => item.toLowerCase().startsWith(searchValue)); // Filter items starting with the input value

        renderSearchResults(filteredItems, searchInput1, searchResults);
    });

    document.addEventListener('click', function(event) {
        const isClickInsideSearch = searchInput1.contains(event.target);
        const isClickInsideResults = searchResults.contains(event.target);

        if (!isClickInsideSearch && !isClickInsideResults) {
            searchResults.style.display = 'none';
        }
    });

    function renderSearchResults(results, inputElement, resultsElement) {
        if (inputElement.value === '') { // If search bar is empty, clear suggestions
            resultsElement.innerHTML = '';
            resultsElement.style.display = 'none';
            return;
        }

        resultsElement.innerHTML = '';
        if (results.length === 0) {
            resultsElement.style.display = 'none';
            return;
        }

        results.forEach(result => {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = result;
            link.addEventListener('click', function() {
                inputElement.value = result;
                resultsElement.style.display = 'none';
            });
            resultsElement.appendChild(link);
        });

        resultsElement.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput2 = document.getElementById('searchInput2');
    const searchResults2 = document.querySelector('.search-results2');

    const stations = [
        "Adarsh Nagar", "AIIMS", "Akshardham", "Anand Vihar", "Arjan Garh", "Ashok Park Main", "Azadpur", "Badarpur", "Botanical Garden", "Central Secretariat", "Chandni Chowk", "Chawri Bazar", "Chhattarpur", "Civil Lines", "Dhaula Kuan", "Dilshad Garden", "Dwarka", "Golf Course", "Govind Puri", "Greater Kailash", "Green Park", "Guru Dronacharya", "Hauz Khas", "INA", "Inderlok", "Jahangirpuri", "Janakpuri West", "Jangpura", "Jasola Vihar Shaheen Bagh", "Jhandewalan", "Jhil Mil", "Jor Bagh", "Kailash Colony", "Kalkaji Mandir", "Kanhaiya Nagar", "Karkarduma", "Karol Bagh", "Kashmere Gate", "Kaushambi", "Kirti Nagar", "Kohat Enclave", "Lajpat Nagar", "Laxmi Nagar", "Malviya Nagar", "Mandi House", "Mayur Vihar-I", "Moolchand", "Moti Nagar", "Mundka", "Nangloi", "Nangloi Railway Station", "Nawada", "Neelam Chowk Ajronda", "Netaji Subhash Place", "New Ashok Nagar", "New Delhi", "Nirman Vihar", "Noida City Centre", "Noida Electronic City", "Okhla", "Paschim Vihar West", "Patel Chowk", "Peeragarhi", "Pitam Pura", "Pragati Maidan", "Pratap Nagar", "Pul Bangash", "Punjabi Bagh", "Rajdhani Park", "Rajendra Place", "Rajiv Chowk", "Ramesh Nagar", "Rithala", "RK Ashram Marg", "Rohini East", "Rohini West", "Saket", "Sarai", "Satguru Ramsingh Marg", "Seelampur", "Shadipur", "Shahdara", "Shastri Nagar", "Shastri Park", "Shivaji Park", "Sikandarpur", "South Extension", "Subhash Nagar", "Sultanpur", "Surajmal Stadium", "Tagore Garden", "Tikri Border", "Tilak Nagar", "Tis Hazari", "Tughlakabad", "Udyog Bhawan", "Udyog Nagar", "Uttam Nagar East", "Uttam Nagar West", "Vaishali", "Vidhan Sabha", "Vishwavidyalaya", "Welcome", "Yamuna Bank"
    ];

    let filteredStations = []; // Initialize filtered stations array

    searchInput2.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        filteredStations = stations.filter(station => station.toLowerCase().startsWith(searchValue)); // Filter stations starting with the input value

        renderSearchResults(filteredStations, searchInput2, searchResults2);
    });

    document.addEventListener('click', function(event) {
        const isClickInsideSearch = searchInput2.contains(event.target);
        const isClickInsideResults = searchResults2.contains(event.target);

        if (!isClickInsideSearch && !isClickInsideResults) {
            searchResults2.style.display = 'none';
        }
    });

    function renderSearchResults(results, inputElement, resultsElement) {
        if (inputElement.value === '') { // If search bar is empty, clear suggestions
            resultsElement.innerHTML = '';
            resultsElement.style.display = 'none';
            return;
        }

        resultsElement.innerHTML = '';
        if (results.length === 0) {
            resultsElement.style.display = 'none';
            return;
        }

        results.forEach(result => {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = result;
            link.addEventListener('click', function() {
                inputElement.value = result;
                resultsElement.style.display = 'none';
            });
            resultsElement.appendChild(link);
        });

        resultsElement.style.display = 'block';
    }
});

        // Shadipur se rithala

document.addEventListener('DOMContentLoaded', () => {
    // Your existing code for search functionality...

    // Selecting the "Find Route" button
    const findRouteBtn = document.querySelector('.route button');

    // Adding click event listener to the "Find Route" button
    findRouteBtn.addEventListener('click', () => {
        // Check if Shadipur and Rithala are selected
        const selectedStation1 = searchInput1.value.toLowerCase();
        const selectedStation2 = searchInput2.value.toLowerCase();
        
        if (selectedStation1 === 'shadipur' && selectedStation2 === 'rithala') {
            // If both stations are selected, open the image
            openImage('img-1');
        } else if (selectedStation1 === 'shadipur' && selectedStation2 === 'jhandewalan') {
            // If Shadipur and Jhandewalan are selected, open the image
            openImage('shadipur-jhandewalan');
        }
    });
});



function openImage(imageName) {
    // Create a new image element
    const image = document.createElement('img');
    // Set the source attribute to the image name
    image.src = imageName + '.png'; // Assuming the image file extension is jpg
    
    // Apply CSS styles for fitting the image width to the screen
    image.style.width = '100%';
    image.style.height = 'auto'; // Allowing the height to adjust automatically based on the aspect ratio
    
    // Set fixed position to make sure the image doesn't scroll with the page
    image.style.position = 'relative';
    image.style.top = '0';
    image.style.left = '0';
    image.style.right = '0';
    image.style.margin = 'auto';
    image.style.zIndex = '9999';

    // Append the image to the body or any other container element
    document.body.appendChild(image);

    // Hide the main2 element
    const main2 = document.querySelector('main2');
    main2.classList.add('hidden');
}


