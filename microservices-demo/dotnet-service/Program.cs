var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/", () =>
{
    return Results.Json(new
    {
        service = "dotnet-service",
        message = "Hello from .NET"
    });
});

app.MapGet("/health", () =>
{
    return Results.Json(new
    {
        status = "ok"
    });
});

app.Run();