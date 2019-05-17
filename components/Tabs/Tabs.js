class Tabs {
    constructor(tabs){
        this.tabs = tabs;
        this.tabLinks = document.querySelectorAll('.tabs-link');
        
        this.tabLinks.forEach(link => {
            const tabInstance = new TabLink(link);
            if(!this.selectedLink)
                this.selectedLink = tabInstance;
        });
    }

    tabClicked(tabLink) {
        if(this.selectedLink !== tabLink){
            this.selectedLink.deselect();
            this.selectedLink = tabLink;
        }       
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
        this.tabLink.classList.add('tabs-link-selected');
        this.tabItem.select();
        tabBox.tabClicked(this);
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
        this.tabItem.classList.add('tabs-item-selected');
    }

    deselect(){
        this.tabItem.classList.remove('tabs-item-selected');
    }
}

const tabBox = new Tabs(document.querySelector('.tabs'));