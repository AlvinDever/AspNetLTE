function loadMapScenario()
{
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Agqht5pYwuPsOvcrx93V8weJYap_Kpkp49u3FNJ9AFIEm6h1hDhgii_5ydkj8Ig2',
        center: new Microsoft.Maps.Location(51.50632, -0.12714),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 10

    //var map = new Microsoft.Maps.Map('#myMap', {
    //    credentials: 'Agqht5pYwuPsOvcrx93V8weJYap_Kpkp49u3FNJ9AFIEm6h1hDhgii_5ydkj8Ig2',
    //    cneter: new Microsoft.Maps.Location(51.50632, -0.12714),
    //    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        //    zoom: 10

    });

    document.getElementById('printoutHeight').innerHTML =
    '<b>' + map.getHeight() + '</b>';
    document.getElementById('printoutWidth').innerHTML =
    '<b>' + map.getWidth() + '</b>';
    document.getElementById('printoutMapX').innerHTML =
    '<b>' + map.getPageX() + '</b>';
    document.getElementById('printoutMapY').innerHTML =
    '<b>' + map.getPageY() + '</b>';

    //Add your post map load code here.
}
