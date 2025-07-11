<?php 
namespace QuillForms;
use QuillForms\Abstracts\Form_Template;
use QuillForms\Managers\Templates_Manager;

class Trivia_Quiz_Template extends Form_Template {

    /**
     * Get template name
     *
     * @since @next
     *
     * @return string
     */
    public function get_name() {
        return 'trivia-quiz';
    }   

    /**
     * Get template title
     *
     * @since @next
     *
     * @return string
     */
    public function get_title() {
        return __( 'Trivia Quiz', 'quillforms' );
    }

    public function get_short_description() {
        return __( 'A quiz to evaluate a trivia. This template includes a multiple choice block and a opinion scale block.', 'quillforms' );
    }

    public function get_long_description() {
        return __( 'This template is designed to gather information from participants who want to take a trivia quiz. It includes a multiple choice block and a opinion scale block to help you collect valuable insights from your participants.', 'quillforms' );
    }


    /**
     * Get Template Link
     * 
     * @since @next
     */
    public function get_template_link() {
        return 'https://quillforms.com/forms/trivia-quiz/';
    }

    /**
     * Get Template Screenshot
     * 
     * @since @next
     */
    public function get_template_screenshot() {
        // screenshot.png is at the same folder of this file
        return QUILLFORMS_PLUGIN_URL . 'includes/templates/trivia-quiz/screenshot.png';
    }


    /**
     * Get template data
     * 
     * @since @next
     */

    public function get_template_data() {
        return json_decode(
            file_get_contents(
                QUILLFORMS_PLUGIN_DIR . 'includes/templates/trivia-quiz/template.json'
            ),
            true
        );
    }

    public function get_required_addons() {
        return array (
            'logic',
            'customthankyouscreenblock'
        );
    }
}

Templates_Manager::instance()->register_template( new Trivia_Quiz_Template() );