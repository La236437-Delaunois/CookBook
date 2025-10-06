namespace CookBook
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public String email { get; set; }
        public String password { get; set; }
        public String username { get; set; }
    }

    public class Recipe
    {
        public int Id { get; set; }
        public String title { get; set; }
        public String description { get; set; }
        public String photo { get; set; }
    }


}
