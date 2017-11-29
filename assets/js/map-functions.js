mapboxgl.accessToken = 'pk.eyJ1IjoiYmtkc24iLCJhIjoiY2phbGNlNXk3MDE5dzJxbXZrN3dibGN1ZyJ9.u42j8zYRYSiz3xwilaujmw';
style_object         = 'mapbox://styles/bkdsn/cjalegyw5cmxh2ro7kvmmncbs';
pos                  = [136.922732,35.1134144];

var map = new mapboxgl.Map({
    container: 'map',
    center: pos,
    zoom: 15,
    style: style_object,
    hash: true,
});

zoomInput = document.getElementById('zoomLevel');

zoomInput.onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    if ( keyCode == '13' ) {

        console.log( 'value is: ' + zoomInput.value );

        map.easeTo({
            duration: 20000,
            easing: function (t) {
                return t;
            },
            animate: true,
            zoom: zoomInput.value,
            center: pos
        });

        return false;
    }

}
