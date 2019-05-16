
class Tabs {
    constructor(tabs){
        this.tabs = tabs;

        this.tabLinks = document.querySelectorAll('.tabs-link');
        this.tabLinks.forEach(tabLink => new TabLink(tabLink));

        this.openedTab = document.querySelector('.tabs-link-selected');
        this.openedContent = document.querySelector('.tabs-item-selected');
        let sameTab=false;
        this.tabs.addEventListener('click', () => {
            if(!sameTab){
                document.querySelector('.tabs-link-selected') ? this.deselectOtherTab() : sameTab=true;
            } else{
                sameTab = false;
                this.openedTab = document.querySelector('.tabs-link-selected');
                this.openedContent = document.querySelector('.tabs-item-selected');  
            }
        });
    }

    deselectOtherTab(){
            this.openedTab.classList.remove('tabs-link-selected');
            this.openedContent.classList.remove('tabs-item-selected');
            this.openedTab = document.querySelector('.tabs-link-selected');
            this.openedContent = document.querySelector('.tabs-item-selected');        
    }    
}

class TabLink {
  constructor(tabLink) {
    this.tabLink = tabLink;

    this.data = this.tabLink.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem (this.itemElement);

    this.tabLink.addEventListener('click', () => {
        this.tabLink.classList.contains('tabs-link-selected') ? this.deselect() : this.select();
    });
  };

  select() {
    //Commented out for stretch attempt
    // const links = document.querySelectorAll('.tabs-link');
    // links.forEach(tabLink => {tabLink.classList.remove('tabs-link-selected')});

    this.tabLink.classList.add('tabs-link-selected');
    this.tabItem.select();
  }

  deselect(){
    this.tabLink.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(tabItem) {
    this.tabItem = tabItem;
  }

  select() {
    //Commented out for stretch attempt
    // const items = document.querySelectorAll('.tabs-item');
    // items.forEach(tabItem => {tabItem.classList.remove('tabs-item-selected')});

    this.tabItem.classList.add('tabs-item-selected');
  }

  deselect(){
    this.tabItem.classList.remove('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const tabBox = new Tabs(document.querySelector('.tabs'));