[![Build Status](https://app.travis-ci.com/hansenmakangiras/esppt-pbb.svg?branch=main)](https://app.travis-ci.com/github/hansenmakangiras/esppt-pbb)
[![StyleCI](https://github.styleci.io/repos/399198629/shield?branch=main)](https://github.styleci.io/repos/399198629)
![GitHub](https://img.shields.io/github/license/hansenmakangiras/esppt-pbb)

<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg" alt=""></p>

# SISTEM INFORMASI PAJAK ONLINE - ESPPT PBB ONLINE

## Installation Quick Start

1. Download the latest theme source from the Marketplace.


2. Download and install `Node.js` from Nodejs. The suggested version to install is `14.16.x LTS`.


3. Start a command prompt window or terminal and change directory to [unpacked path]:


4. Install the latest `NPM`:

        npm install --global npm@latest


5. To install `Composer` globally, download the installer from https://getcomposer.org/download/ Verify that Composer in successfully installed, and version of installed Composer
   will appear:

        composer --version


6. Install `Composer` dependencies.

        composer install


7. Install `NPM` dependencies.

        npm install


8. The below command will compile all the assets(sass, js, media) to public folder:

        npm run dev


9. Copy `.env.example` file and create duplicate. Use `cp` command for Linux or Max user.

        cp .env.example .env

   If you are using `Windows`, use `copy` instead of `cp`.

        copy .env.example .env


10. Create a table in MySQL database and fill the database details `DB_DATABASE` in `.env` file.


12. The below command will create tables into database using Laravel migration and seeder.

        php artisan migrate:fresh --seed


13. Generate your application encryption key:

        php artisan key:generate


14. Start the localhost server:

        php artisan serve

## Documentation

For setup, usage guidance, and all other docs - please consult the [Project Wiki](https://github.com/hansenmakangiras/pajak-online/wiki).

## License

The contents of this repository is released under the [MIT license](https://opensource.org/licenses/MIT).


