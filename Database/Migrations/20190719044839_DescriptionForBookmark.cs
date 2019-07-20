using Microsoft.EntityFrameworkCore.Migrations;

namespace Database.Migrations
{
    public partial class DescriptionForBookmark : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Bookmarks",
                type: "varchar(200)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Bookmarks");
        }
    }
}
