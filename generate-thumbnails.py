from pdf2image import convert_from_path
import os

# Carpeta donde están tus PDFs
PDF_FOLDER = "enpdf/pdfs"

def generate_thumbnail(pdf_path, output_path):
    images = convert_from_path(pdf_path, dpi=200, first_page=0, last_page=1)
    if images:
        images[0].save(output_path, "JPEG")
        print(f"✅ Miniatura creada: {output_path}")

def main():
    for filename in os.listdir(PDF_FOLDER):
        if filename.lower().endswith(".pdf"):
            pdf_path = os.path.join(PDF_FOLDER, filename)
            thumbnail_name = os.path.splitext(filename)[0] + ".jpg"
            thumbnail_path = os.path.join(PDF_FOLDER, thumbnail_name)
            generate_thumbnail(pdf_path, thumbnail_path)

if __name__ == "__main__":
    main()
