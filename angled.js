console.log('hello')



const angleSpins = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg)' }
];

const shapeTiming = {
    duration: 2000,
    iterations: 1,
};

const el = document.getElementsByTagName('body')[0];

function handleMouseUp( evt ) {
    evt.preventDefault();
    console.log( evt );
    console.log( 'Evt printed' );

    el.animate( angleSpins, shapeTiming );
}

el.addEventListener( 'click', handleMouseUp, true);
