from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
import requests
import os
from urllib.parse import urljoin


def download_image(image_url, folder, counter):
    try:
        response = requests.get(image_url)
        response.raise_for_status()  
        image_name = f"SJ_{counter:02d}.jpg"  

        image_path = os.path.join(folder, image_name)

        with open(image_path, 'wb') as file:
            file.write(response.content)

        print(f"Downloaded: {image_name}")
    except requests.exceptions.RequestException as e:
        print(f"Error downloading {image_url}: {e}")

service = Service(executable_path="./chromedriver.exe")
driver = webdriver.Chrome(service=service)

driver.get("https://baniola.tn/voitures")

time.sleep(5)

download_folder = "downloaded_images"
if not os.path.exists(download_folder):
    os.makedirs(download_folder)

img_elements = driver.find_elements(By.TAG_NAME, "img")

img_urls = [img.get_attribute('src') for img in img_elements if img.get_attribute('src')]

for counter, img_url in enumerate(img_urls, start=1):
    full_img_url = urljoin(driver.current_url, img_url)
    download_image(full_img_url, download_folder, counter)


driver.quit()
