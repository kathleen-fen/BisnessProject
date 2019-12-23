(function(){
    var me = {};

    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose(e){
        e.preventDefault();
        me.close();
        closeButton.removeEventListener('click',onClose);
    }

    function onEscPress(e){
        if (event.code == "Escape") {
        e.preventDefault();
        me.close();
        window.removeEventListener('keydown',OnEscPress);
        }
    }


    me.open = function(){
        form.classList.remove('is-hidden');
        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click',onClose);
        window.addEventListener('keydown',onEscPress);
    }; 
        
    me.close = function(){
        form.classList.add('is-hidden')
        
    };

    me.isValid = function() {
        
        if(!me.isAllCompleted(document.querySelectorAll('[data-valid="required"]'))) {
            console.log('Заполните поля!');
            return false;

        } else if (!ITVDN.validation.isEmail(document.querySelector('[data-email]').value)) {
            console.log('Неверный email!');
            return false;
        } else if (!ITVDN.validation.isNumber(document.querySelector('[data-number]').value)) {
            console.log('Неверный номер телефона!');
            return false;
        }
        return true;

    };

    me.isAllCompleted = function(data) {
        var result = true;
        for (var i=0; i<data.length; i++) {
            if(!ITVDN.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            } 
        }
        return result;

    };

    ITVDN.form = me;


}());