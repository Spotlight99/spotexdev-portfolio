from PIL import Image
import os

# Path to the favicon
favicon_path = os.path.join(os.path.dirname(__file__), 'public', 'favicon.png')

# Open the image
img = Image.open(favicon_path)

# Convert to RGBA if it's not already
img = img.convert('RGBA')

# Get the size - make it square
size = max(img.size)
img = img.resize((size, size), Image.Resampling.LANCZOS)

# Create a circular mask
mask = Image.new('L', (size, size), 0)
draw = __import__('PIL.ImageDraw', fromlist=['ImageDraw']).Draw(mask)
draw.ellipse([0, 0, size, size], fill=255)

# Apply the mask
output = Image.new('RGBA', (size, size), (0, 0, 0, 0))
output.paste(img, (0, 0))
output.putalpha(mask)

# Save the circular favicon
output.save(favicon_path, 'PNG')
print(f"✅ Circular favicon created successfully at {favicon_path}")
