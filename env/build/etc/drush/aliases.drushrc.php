<?php
/**
 * Drush Aliases
 *
 * This file provides for the automatic generation of site aliases based
 * on the file layout and configuration of the Docker hosting environment.
 *
 * Site alias for tuned Drush usage with the 'drupal-ci-test' site.
 */

$aliases['drupal-ci-test'] = array(
  'url' => isset($_ENV['VIRTUAL_HOST']) ? $_ENV['VIRTUAL_HOST'] : 'http://www.drupal-ci-test.vm/',
  'root' => '/var/www/html'
);
