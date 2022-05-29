 <?php
  class Config_profile extends Database
  {
    private $id;
    private $profile;
    private $theme;
    private $autoplay;
    private $columns;
    private $orden;
    private $lang;
    private $volume;
    private $video_velocity_default;
    private $avable_chat;
    private $default_view;
    private $avable_secret_chat;
    private $avable_history;
    private $limit_elem_collection;
    private $offline_mode;
    private $avable_response_comment;
    private $option_paginator;
    private $avable_notifications;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of option_paginator
     */
    public function getOption_paginator()
    {
      return $this->option_paginator;
    }

    /**
     * Set the value of option_paginator
     *
     * @return  self
     */
    public function setOption_paginator($option_paginator)
    {
      $this->option_paginator = $option_paginator;

      return $this;
    }

    /**
     * Get the value of avable_notifications
     */
    public function getAvable_notifications()
    {
      return $this->avable_notifications;
    }

    /**
     * Set the value of avable_notifications
     *
     * @return  self
     */
    public function setAvable_notifications($avable_notifications)
    {
      $this->avable_notifications = $avable_notifications;

      return $this;
    }

    /**
     * Get the value of avable_response_comment
     */
    public function getAvable_response_comment()
    {
      return $this->avable_response_comment;
    }

    /**
     * Set the value of avable_response_comment
     *
     * @return  self
     */
    public function setAvable_response_comment($avable_response_comment)
    {
      $this->avable_response_comment = $avable_response_comment;

      return $this;
    }

    /**
     * Get the value of offline_mode
     */
    public function getOffline_mode()
    {
      return $this->offline_mode;
    }

    /**
     * Set the value of offline_mode
     *
     * @return  self
     */
    public function setOffline_mode($offline_mode)
    {
      $this->offline_mode = $offline_mode;

      return $this;
    }

    /**
     * Get the value of limit_elem_collection
     */
    public function getLimit_elem_collection()
    {
      return $this->limit_elem_collection;
    }

    /**
     * Set the value of limit_elem_collection
     *
     * @return  self
     */
    public function setLimit_elem_collection($limit_elem_collection)
    {
      $this->limit_elem_collection = $limit_elem_collection;

      return $this;
    }

    /**
     * Get the value of default_view
     */
    public function getDefault_view()
    {
      return $this->default_view;
    }

    /**
     * Set the value of default_view
     *
     * @return  self
     */
    public function setDefault_view($default_view)
    {
      $this->default_view = $default_view;

      return $this;
    }

    /**
     * Get the value of avable_secret_chat
     */
    public function getAvable_secret_chat()
    {
      return $this->avable_secret_chat;
    }

    /**
     * Set the value of avable_secret_chat
     *
     * @return  self
     */
    public function setAvable_secret_chat($avable_secret_chat)
    {
      $this->avable_secret_chat = $avable_secret_chat;

      return $this;
    }

    /**
     * Get the value of avable_history
     */
    public function getAvable_history()
    {
      return $this->avable_history;
    }

    /**
     * Set the value of avable_history
     *
     * @return  self
     */
    public function setAvable_history($avable_history)
    {
      $this->avable_history = $avable_history;

      return $this;
    }

    /**
     * Get the value of id
     */
    public function getId()
    {
      return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public function setId($id)
    {
      $this->id = $id;

      return $this;
    }

    /**
     * Get the value of profile
     */
    public function getProfile()
    {
      return $this->profile;
    }

    /**
     * Set the value of profile
     *
     * @return  self
     */
    public function setProfile($profile)
    {
      $this->profile = $profile;

      return $this;
    }

    /**
     * Get the value of theme
     */
    public function getTheme()
    {
      return $this->theme;
    }

    /**
     * Set the value of theme
     *
     * @return  self
     */
    public function setTheme($theme)
    {
      $this->theme = $theme;

      return $this;
    }

    /**
     * Get the value of autoplay
     */
    public function getAutoplay()
    {
      return $this->autoplay;
    }

    /**
     * Set the value of autoplay
     *
     * @return  self
     */
    public function setAutoplay($autoplay)
    {
      $this->autoplay = $autoplay;

      return $this;
    }

    /**
     * Get the value of orden
     */
    public function getOrden()
    {
      return $this->orden;
    }

    /**
     * Set the value of orden
     *
     * @return  self
     */
    public function setOrden($orden)
    {
      $this->orden = $orden;

      return $this;
    }

    /**
     * Get the value of columns
     */
    public function getColumns()
    {
      return $this->columns;
    }

    /**
     * Set the value of columns
     *
     * @return  self
     */
    public function setColumns($columns)
    {
      $this->columns = $columns;

      return $this;
    }

    /**
     * Get the value of avable_chat
     */
    public function getAvable_chat()
    {
      return $this->avable_chat;
    }

    /**
     * Set the value of avable_chat
     *
     * @return  self
     */
    public function setAvable_chat($avable_chat)
    {
      $this->avable_chat = $avable_chat;

      return $this;
    }

    /**
     * Get the value of video_velocity_default
     */
    public function getVideo_velocity_default()
    {
      return $this->video_velocity_default;
    }

    /**
     * Set the value of video_velocity_default
     *
     * @return  self
     */
    public function setVideo_velocity_default($video_velocity_default)
    {
      $this->video_velocity_default = $video_velocity_default;

      return $this;
    }

    /**
     * Get the value of volume
     */
    public function getVolume()
    {
      return $this->volume;
    }

    /**
     * Set the value of volume
     *
     * @return  self
     */
    public function setVolume($volume)
    {
      $this->volume = $volume;

      return $this;
    }

    /**
     * Get the value of lang
     */
    public function getLang()
    {
      return $this->lang;
    }

    /**
     * Set the value of lang
     *
     * @return  self
     */
    public function setLang($lang)
    {
      $this->lang = $lang;

      return $this;
    }
  }
