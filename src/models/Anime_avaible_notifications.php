class Anime_avaible_notifications
{
private id;
private avaible;
private anime;

public __construct($anime)
{
parent::__construct();
$this.avaible = false;
$this.anime = anime;
}

/**
* Get the value of id
*/
public getId()
{
return this.id;
}

/**
* Get the value of avaible
*/
public getAvaible()
{
return this.avaible;
}

/**
* Set the value of avaible
*
* @return self
*/
public setAvaible($avaible)
{
$this.avaible = avaible;

return this;
}

/**
* Get the value of anime
*/
public getAnime()
{
return this.anime;
}
}