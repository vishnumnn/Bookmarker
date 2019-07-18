using Microsoft.EntityFrameworkCore.Migrations;

namespace Database.Migrations
{
    public partial class for2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookmarks_Folders_folderId",
                table: "Bookmarks");

            migrationBuilder.RenameColumn(
                name: "folderId",
                table: "Bookmarks",
                newName: "FolderId");

            migrationBuilder.RenameIndex(
                name: "IX_Bookmarks_folderId",
                table: "Bookmarks",
                newName: "IX_Bookmarks_FolderId");

            migrationBuilder.AlterColumn<int>(
                name: "FolderId",
                table: "Bookmarks",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Bookmarks_Folders_FolderId",
                table: "Bookmarks",
                column: "FolderId",
                principalTable: "Folders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookmarks_Folders_FolderId",
                table: "Bookmarks");

            migrationBuilder.RenameColumn(
                name: "FolderId",
                table: "Bookmarks",
                newName: "folderId");

            migrationBuilder.RenameIndex(
                name: "IX_Bookmarks_FolderId",
                table: "Bookmarks",
                newName: "IX_Bookmarks_folderId");

            migrationBuilder.AlterColumn<int>(
                name: "folderId",
                table: "Bookmarks",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Bookmarks_Folders_folderId",
                table: "Bookmarks",
                column: "folderId",
                principalTable: "Folders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
