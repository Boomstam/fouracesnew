const storageKey = 'storeState';
const trueKey = 'true';
const products = {
    TABULA_RASA: "Tabula Rasa",
    FOR_ACES: "For Aces",
    ODYSSEE: "Odyssee",
    PUZZLE: "Puzzle"
}
const shoppingBasket = {}

export default class StoreState {

    constructor()
    {   
        if(typeof localStorage === 'undefined')
        {
               this.isOpen = false;
        } else {

            let isOpen = (localStorage.getItem(storageKey) === trueKey);

            if(isOpen !== undefined){

                this.isOpen = isOpen;
            } else {
                localStorage.setItem(storageKey, false);
            }
        }
        this.getOpenState = this.getOpenState.bind(this);
    }

    getOpenState(){

        return this.isOpen;
    }
    
    setReRenderCallback(callback)
    {
        this.reRenderCallback = callback;
    }

    toggleStoreLightBox(){

        this.isOpen = !this.isOpen;
        
        localStorage.setItem(storageKey, this.isOpen);
        
        this.reRenderCallback();
    }
}