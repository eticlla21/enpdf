from pdf2image import convert_from_path

# Ruta de prueba (debe existir)
pdf_path = "ejemplo.pdf"

# Convierte la primera página
images = convert_from_path(pdf_path, dpi=200, first_page=0, last_page=1)

# Guarda la miniatura
if images:
    images[0].save("miniatura.jpg", "JPEG")
    print("✅ Miniatura creada correctamente")
else:
    print("❌ No se pudo crear la miniatura")
