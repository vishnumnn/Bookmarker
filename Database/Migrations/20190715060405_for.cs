using Microsoft.EntityFrameworkCore.Migrations;

namespace Database.Migrations
{
    public partial class @for : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookmark_Folders_FolderId",
                table: "Bookmark");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Bookmark",
                table: "Bookmark");

            migrationBuilder.RenameTable(
                name: "Bookmark",
                newName: "Bookmarks");

            migrationBuilder.RenameColumn(
                name: "FolderId",
                table: "Bookmarks",
                newName: "folderId");

            migrationBuilder.RenameIndex(
                name: "IX_Bookmark_FolderId",
                table: "Bookmarks",
                newName: "IX_Bookmarks_folderId");

            migrationBuilder.AlterColumn<int>(
                name: "folderId",
                table: "Bookmarks",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Bookmarks",
                table: "Bookmarks",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookmarks_Folders_folderId",
                table: "Bookmarks",
                column: "folderId",
                principalTable: "Folders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookmarks_Folders_folderId",
                table: "Bookmarks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Bookmarks",
                table: "Bookmarks");

            migrationBuilder.RenameTable(
                name: "Bookmarks",
                newName: "Bookmark");

            migrationBuilder.RenameColumn(
                name: "folderId",
                table: "Bookmark",
                newName: "FolderId");

            migrationBuilder.RenameIndex(
                name: "IX_Bookmarks_folderId",
                table: "Bookmark",
                newName: "IX_Bookmark_FolderId");

            migrationBuilder.AlterColumn<int>(
                name: "FolderId",
                table: "Bookmark",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Bookmark",
                table: "Bookmark",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookmark_Folders_FolderId",
                table: "Bookmark",
                column: "FolderId",
                principalTable: "Folders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
