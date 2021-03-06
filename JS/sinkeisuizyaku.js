( function () {
    var cards = [],
    CARD_NUM = 16,
    currentNum, // o or 1
    openedCard, // 0 .. CARD_NUM - 1
    correctNum = 0,
    enableFlip = true,
    time = 0,
    timerId;        

    function flip( card ) {
        if ( !enableFlip ) {
            return;
        }
        if ( card.value != '?' ) {
                     return;
        }
        card.value = card.dataset.num;
        
        if ( typeof currentNum === 'undefined' ) {
            // 1枚目
            openedCard = card;
            currentNum = card.dataset.num;
        }
        else {
            // 2枚目
            // 判定
            judge( card );
            currentNum = undefined;
        }
    }
             
    function judge( card ) {
        if ( currentNum == card.dataset.num ) {
            //正解処理
            correctNum++;
            if ( correctNum == CARD_NUM / 2) {
                clearTimeout(timerId);
                alert("clear time is .." + document.getElementById('time').innerHTML);
            }
        } 
        else {
            //不正解
            enableFlip = false;
            setTimeout( function() {
                openedCard.value = '?';
                card.value = '?';
                enableFlip = true;
            }, 700 );
        }
    }
    
    function initCards() {
        var num,
        cardIndex,
        i,
        stage = document.getElementById( 'stage' );
        
        for ( i = 0; i < CARD_NUM; i++ ) {
            // 2つずつ同じ数を取得
            num = Math.floor( i / 2 );
            do {
                cardIndex = Math.floor( Math.random() * CARD_NUM );
            } while ( typeof cards[cardIndex] != 'undefined' ); // 定義されているかぎりループ
            cards[cardIndex] = createCard( num );
        }
        for ( i = 0; i < CARD_NUM; i++ ) {
            stage.appendChild( cards[i] );
            if ( i % Math.sqrt( CARD_NUM ) == ( Math.sqrt( CARD_NUM ) - 1 ) ) {
                stage.appendChild( document.createElement( 'br' ) );
            }
        }
    }
             
    function createCard( num ) {
        var card =  document.createElement('input');
        card.type = 'button';
        card.value = '?';
        card.dataset.num = num;
                 
        card.onclick = function(){
            flip(this);
        };
        return card;
    }
             
    function runTimer() {
        document.getElementById('time').innerHTML = time++;
	    timerId = setTimeout(function () {
            runTimer();
        }, 10);
    }
    
    initCards();
    runTimer();
})();
    
