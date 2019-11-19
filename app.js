// BUDGET CONTROLLER

var budgetController = (function () {

    

})();


// UI CONTROLLER

var UIController = (function () {

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    };

    return {
        getInput: function() {
            return {
                // objets : sera inc or exp
                type: document.querySelector(DOMstrings.inputType).value,
                // récupère le texte
                description: document.querySelector(DOMstrings.inputDescription).value,
                // récupère le montant
                value: document.querySelector(DOMstrings.inputValue).value
            };        
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {

    var setupEventlisteners = function () {

        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
    
            if (event.keyCode === 13 || event.which === 13) {
    
                ctrlAddItem();
            }
    
        });
    };

    

    var ctrlAddItem = function () {

        // 1. Get the field input data (récupère les données entrées)

        var input = UICtrl.getInput();        

        //2. Add the item to the budget controller

        // 3. Add the item to the UI

        //4. Calculate the budget

        //5 . Display the budget on the UI
    };

        return {
            init : function() {
            console.log('Application has started'); 
            setupEventlisteners();
        }
    };

})(budgetController, UIController);

controller.init();



