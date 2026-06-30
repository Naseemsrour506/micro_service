FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY dotnet-service.csproj .

RUN dotnet restore dotnet-service.csproj

COPY . .

RUN dotnet publish dotnet-service.csproj -c Release -o /app/publish


FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 5002

ENV ASPNETCORE_URLS=http://+:5002

ENTRYPOINT ["dotnet", "dotnet-service.dll"]