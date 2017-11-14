function ajaxRequest( url )
{
	var AJAX_req = new XMLHttpRequest();
	AJAX_req.open( 'GET', url, false );
	AJAX_req.send( null );
	return AJAX_req.responseText;
}
