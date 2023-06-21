jQuery( document ).ready(function( $ ) {

    /* Install Lemmony companion */
    var installing = 0;
    $('.lemmony-notice button.lemmony-install-button').on( 'click', function() {
        if( !installing ) {
            var button = $(this);
            var manual = $(this).closest( '.lemmony-notice' ).find( '.lemmony-notice__manual' );
            installing = 1;

            button.removeClass( 'button-primary' );
            button.addClass( 'updating-message' );
            button.html( button.attr( 'data-step1' ) );

            $.ajax({
                type: "POST",
                timeout: 90000,
                url: ajaxurl,
                data : {
                    action : 'lemmony_companion_install',
                },
                success: function( response ) {
                    button.removeClass( 'updating-message' );
                    button.addClass( 'button-disabled' );
                    if( response.includes( '"done"' ) ) {
                        button.addClass( 'updated-message' );
                        button.html( button.attr( 'data-step2' ) );

                        setTimeout(() => {
                            window.location.href = button.attr( 'data-link' );
                        }, 500 );
                    } else {
                        button.remove();
                        manual.addClass( 'is-active' );
                    }
                },
                complete: function( request, status ) {
                    if( status != 'success' ) {
                        button.remove();
                        manual.addClass( 'is-active' );
                    }
                },
            });
        }
    });


    /* Import Lemmony content */
    var importing = 0;
    $('.lemmony-notice button.lemmony-import-button').on( 'click', function() {
        if( !importing ) {
            var button = $(this);
            importing = 1;

            button.removeClass( 'button-primary' );
            button.addClass( 'updating-message' );
            button.html( button.attr( 'data-step1' ) );
    
            $.ajax({
                type: "POST",
                url: ajaxurl,
                data : {
                    action : 'lemmony_import',
                },
                success: function( response ) {
                    button.removeClass( 'updating-message' );
                    button.addClass( 'button-disabled' );
                    if( response.includes( '"done"' ) ) {
                        button.addClass( 'updated-message' );
                        button.html( button.attr( 'data-step2' ) );

                        setTimeout(() => {
                            window.location.href = button.attr( 'data-link' );
                        }, 500 );
                    } else {
                        button.html( 'Something went wrong! Please try again...' );
                    }
                }
            });
        }
    });


    /* Reset Lemmony content */
    var reset = 0;
    $('.lemmony-notice button.lemmony-import-reset').on( 'click', function() {
        if( !reset ) {
            var button = $(this);
            reset = 1;

            $.ajax({
                type: "POST",
                url: ajaxurl,
                data : {
                    action : 'lemmony_import_reset',
                },
                success: function( response ) {
                    button.removeClass( 'updating-message' );
                    button.addClass( 'button-disabled' );
                    if( response.includes( '"done"' ) ) {
                        window.location.href = button.attr( 'data-link' );
                    } else {
                        button.html( 'Something went wrong! Please try again...' );
                    }
                }
            });
        }
    });


    /* Dismiss Lemmony companion notice */
    $(document).on( 'click', '.lemmony-notice.is-dismissible button.notice-dismiss', function() {
        jQuery.ajax({
            url: ajaxurl,
            data: {
                action: 'lemmony_companion_notice_dismiss'
            }
        });
    });


    /* Dismiss Lemmony review notice */
    $(document).on( 'click', '.lemmony-notice .lemmony-review-dismiss', function() {
        jQuery.ajax({
            url: ajaxurl,
            data: {
                action: 'lemmony_review_notice_dismiss'
            },
            success: function( response ) {
                $('.lemmony-review-dismiss').closest('.lemmony-notice').remove();
            }
        });
    });


});