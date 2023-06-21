<?php
/*
 * Disallow direct access
 */
if( !defined( 'ABSPATH' ) ) {
    die( 'Forbidden.' );
}


/**
 * Global constants for companion plugin
 */
define( 'LEMMONY_THEME', true );
define( 'LEMMONY_THEME_VERSION', '1.3' );


/**
 * Functions
 */

// Theme setup related functions
require get_template_directory() . '/inc/setup.php';

// Theme companion plugin related functions
if( is_admin() ) :
    require get_template_directory() . '/inc/companion.php';
endif;