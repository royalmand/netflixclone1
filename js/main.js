console.log("tes");
const tabItems = document.querySelectorAll('.tab-items'); // 3 Button
const tabContentItems = document.querySelectorAll('.tab-content-item'); // Content in each Button

// Select tab content item 
// Since we use clicking and directed it into a function, we can access whatever the particular item we're clicking with `this` 
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`); // Calling #tab-id-content
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
// for each item, take that item and add event listener when i click and call function selectItem
tabItems.forEach(item => item.addEventListener('click', selectItem));

