CREATE TABLE "pages" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"published" boolean,
	"category" text
);
