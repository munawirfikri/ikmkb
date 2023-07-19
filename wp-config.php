<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ikmkb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'bgdoeljkt123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cO0I%Lb|^qZ?<W.^xt7|1m1Fp7&1prcEHdoGd<4iBIi[0BcMyaiEWnx+c4?gx!uF' );
define( 'SECURE_AUTH_KEY',  '~B =_.{,*5]K&he-]*-EA_6h_`VzPt%;I5{cBS<@kM,rzb{6])A.HdXNZ%Q&7Wnp' );
define( 'LOGGED_IN_KEY',    ')x`%E}=LT5}ED0+dVE,`59qM/`M69[<Wv/&0g}`nI@lYMmTXCs)njCfH9Oz]_W{s' );
define( 'NONCE_KEY',        '-6Zp)h >~rNGg=hRv^;q6F+5#/kLCbO`-<0NwDVX2D#F>!|mV*B)R=+?Z$yfTek?' );
define( 'AUTH_SALT',        '$XBKa~;DQvut!@K.i#h7YCFx^KryjBywbZVZz4$1>*D-6hc?,~Z?EemwzvS;f93E' );
define( 'SECURE_AUTH_SALT', 'Vqt9WF|0/meupe{pm?Z$%6.lN(Yv}u8gxqAJ(Yh]/}oHgdedeK8-.(/LH>DAi+$H' );
define( 'LOGGED_IN_SALT',   '9su@QzV8Bew`%;k><ft5H0NZ:9?%)W`8DN?<+b>Q~` gQbU+Qh_]1)FNKoVQ}vFz' );
define( 'NONCE_SALT',       'ry)yR~VVk$gZHVQ`k:]<-WUO.9u;5X3c&)oe1/#=z[1;9yLkw?:2(>8`9/`e%E>]' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define('FS_METHOD', 'direct');
