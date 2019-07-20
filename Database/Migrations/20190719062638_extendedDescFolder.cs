using Microsoft.EntityFrameworkCore.Migrations;

namespace Database.Migrations
{
    public partial class extendedDescFolder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Folders",
                type: "nvarchar(500)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Folders",
                type: "nvarchar(200)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(500)",
                oldNullable: true);
        }
    }
}
