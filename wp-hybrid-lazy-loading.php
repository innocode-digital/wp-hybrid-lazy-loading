<?php
/**
 * Plugin Name: Hybrid Lazy Loading
 * Description: A Progressive Migration To Native Lazy Loading.
 * Version: 1.0.0
 * Author: Innocode
 * Author URI: https://innocode.com
 * Tested up to: 5.2.2
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

define( 'INNOCODE_WP_HYBRID_LAZY_LOADING_VERSION', '1.0.0' );
define( 'INNOCODE_WP_HYBRID_LAZY_LOADING_FILE', __FILE__ );

require_once __DIR__ . '/src/Assets.php';
require_once __DIR__ . '/src/DOM.php';
require_once __DIR__ . '/src/Events.php';
require_once __DIR__ . '/src/Hooks.php';

Innocode\WPHybridLazyLoading\Events::register();