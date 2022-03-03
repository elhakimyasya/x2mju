from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.ui import Select

from webdriver_manager.chrome import ChromeDriverManager
from time import sleep
import random
import pyautogui

# Data
with open('C:/Users/Yazz/Desktop/bot.txt', 'r') as file:
    dataAnggota = file.read().replace('\n', '')
    
dataAnggotaSplit = dataAnggota.split("	")
dataTTLSplit = dataAnggotaSplit[3].split(" ")

inputNIK = dataAnggotaSplit[0]
inputNama = dataAnggotaSplit[1]
inputTempatLahir = dataAnggotaSplit[2]
inputTanggalLahir = dataTTLSplit[0]
inputBulanLahir = dataTTLSplit[1]
inputTahunLahir = dataTTLSplit[2]
inputKelamin = dataAnggotaSplit[4].lower()
inputGolonganDarah = dataAnggotaSplit[5].lower()
inputAlamat = dataAnggotaSplit[6]
inputRT = dataAnggotaSplit[7]
inputRW = dataAnggotaSplit[8]
inputKelurahan = dataAnggotaSplit[9].lower()
inputKecamatan = dataAnggotaSplit[10].lower()
inputAgama = dataAnggotaSplit[11].lower()
inputPernikahan = dataAnggotaSplit[12].lower()
inputPekerjaan = dataAnggotaSplit[13].lower()
inputPendidikanTerakhir = dataAnggotaSplit[14].lower()
inputNamaSekolah = dataAnggotaSplit[15]
inputNomorTelp = dataAnggotaSplit[16]
inputSayapPAN = dataAnggotaSplit[17]
inputPhotoKTP = dataAnggotaSplit[18]
inputPhotoPas = dataAnggotaSplit[19]
inputEmail = dataAnggotaSplit[20]

# Menjalankan Web Browser
webDriverOption = webdriver.ChromeOptions()
webDriverOption.add_experimental_option("detach", True)
webDriverOption.add_experimental_option('excludeSwitches', ['enable-logging'])
webDriver = webdriver.Chrome(options=webDriverOption, service=Service("C:/chromedriver.exe"))

# Membuka Website
webDriver.get('https://simpan-dashboard.vercel.app/')
# Interaksi Otomatis
# Email dan Password
email = "admin_dpd_1810"
password = "admin@dpd"

print("Login...")
# Mengisi Form
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, "username"))).send_keys(email)
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, "password"))).send_keys(password)
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button"))).click()
# Klik Anggota
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "nav a:nth-child(4)"))).click()
# Klik Tambah Anggota
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'a[href="/anggota/tambah"'))).click()

print("Mengisi Data...")
# Nama Lengkap
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, "nama_lengkap"))).send_keys(inputNama)
# NIK
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, "nik"))).send_keys(inputNIK)
# Tempat Lahir
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, "tempat_lahir"))).send_keys(inputTempatLahir)
# Tanggal, Bulan, Tahun Lahir
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'input[placeholder="Pilih Tanggal"][type="text"]'))).click()
Select(webDriver.find_element(By.CSS_SELECTOR, '.flatpickr-monthDropdown-months')).select_by_visible_text(inputBulanLahir)
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'input.numInput.cur-year'))).click()
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'input.numInput.cur-year'))).send_keys(inputTahunLahir)
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.flatpickr-day[aria-label="' + inputBulanLahir + ' ' + inputTanggalLahir + ', ' + inputTahunLahir + '"]'))).click()
# Jenis Kelamin
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(5) button'))).click()
if inputKelamin == "laki-laki":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(5) li:first-child'))).click()
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(5) li:last-child'))).click()
# Golongan Darah
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(6) button'))).click()
if inputGolonganDarah == "a":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(6) li:nth-child(1)'))).click()
elif inputGolonganDarah == "b":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(6) li:nth-child(2)'))).click()
elif inputGolonganDarah == "o":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(6) li:nth-child(3)'))).click()
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(6) li:nth-child(4)'))).click()
# Agama
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(7) button'))).click()
if inputAgama == "islam":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(7) li:nth-child(1)'))).click()
elif inputAgama == "kristen protestan":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(7) li:nth-child(2)'))).click()
elif inputAgama == "katolik":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(7) li:nth-child(3)'))).click()
elif inputAgama == "hindu":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(7) li:nth-child(4)'))).click()
elif inputAgama == "buddha":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(7) li:nth-child(5)'))).click()
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(7) li:nth-child(6)'))).click()
# Status Pernikahan
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(8) button'))).click()
if inputPernikahan == "menikah":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(8) li:nth-child(1)'))).click()
elif inputPernikahan == "pernah menikah":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(8) li:nth-child(2)'))).click()
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(8) li:nth-child(3)'))).click()
# Pendidikan Terakhir
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(9) button'))).click()
if inputPendidikanTerakhir == "sd":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(9) li:nth-child(1)'))).click()
elif inputPendidikanTerakhir == "smp":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(9) li:nth-child(2)'))).click()
elif inputPendidikanTerakhir == "sma":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(9) li:nth-child(3)'))).click()
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(9) li:nth-child(4)'))).click()
# Nama Sekolahan
if inputNamaSekolah == " " or inputNamaSekolah == "":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'institusi_pendidikan'))).send_keys("-")
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'institusi_pendidikan'))).send_keys(inputNamaSekolah)
# Pekerjaan
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) button'))).click()
if inputPekerjaan == "karyawan swasta":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) li:nth-child(3)'))).click()
elif inputPekerjaan == "pelajar/mahasiswa":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) li:nth-child(5)'))).click()
elif inputPekerjaan == "mengurus rumah tangga":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) li:nth-child(6)'))).click()
elif inputPekerjaan == "buruh":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) li:nth-child(8)'))).click()
elif inputPekerjaan == "petani":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) li:nth-child(11)'))).click()
elif inputPekerjaan == "pensiunan":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) li:nth-child(14)'))).click()
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.col-span-6.sm\:col-span-3:nth-child(11) li:nth-child(4)'))).click()
# Nomor Telepon
if inputNomorTelp == "-" or inputNomorTelp == "":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'nomor_telepon'))).send_keys("+628000" + str(random.randint(100, 999999)))
else:
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'nomor_telepon'))).send_keys(inputNomorTelp)
# Provinsi
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(1) button'))).click()
webDriver.find_element(By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(1) li:nth-child(8)').click()
# Kabupaten
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(2) button'))).click()
webDriver.find_element(By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(2) li:nth-child(10)').click()
# Kecamatan
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) button'))).click()
if inputKecamatan == "pringsewu":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(1)'))).click()
elif inputKecamatan == "gading rejo":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(2)'))).click()
elif inputKecamatan == "ambarawa":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(3)'))).click()
elif inputKecamatan == "pardasuka":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(4)'))).click()
elif inputKecamatan == "pagelaran":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(5)'))).click()
elif inputKecamatan == "banyumas":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(6)'))).click()
elif inputKecamatan == "adiluwih":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(7)'))).click()
elif inputKecamatan == "sukoharjo":
    WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(8)'))).click()
else:
    webDriver.find_element(By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(3) li:nth-child(9)').click()
#Kelurahan
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) button'))).click()
if inputKecamatan == "pringsewu":
    if inputKelurahan == "fajaresuk":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "pringsewu utara":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "pringsewu selatan":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "pringsewu barat":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "pringsewu timur":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "margakaya":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "waluyojati":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "sidoharjo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "podomoro":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    elif inputKelurahan == "bumi arum":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()
    elif inputKelurahan == "fajar agung":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(11)'))).click()
    elif inputKelurahan == "rejosari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(12)'))).click()
    elif inputKelurahan == "bumi ayu":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(13)'))).click()
    elif inputKelurahan == "podosari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(14)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(15)'))).click()
elif inputKecamatan == "gading rejo":
    if inputKelurahan == "parerejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "blitarejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "panjerejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "bulukarto":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "wates":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "tambah rejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "wonodadi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "gading rejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "tegalsari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    elif inputKelurahan == "tulung agung":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()
    elif inputKelurahan == "bulurejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(11)'))).click()
    elif inputKelurahan == "yogyakarta":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(12)'))).click()
    elif inputKelurahan == "kediri":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(13)'))).click()
    elif inputKelurahan == "mataram":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(14)'))).click()
    elif inputKelurahan == "wonosari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(15)'))).click()
    elif inputKelurahan == "klaten":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(16)'))).click()
    elif inputKelurahan == "wates timur":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(17)'))).click()
    elif inputKelurahan == "wates selatan":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(18)'))).click()
    elif inputKelurahan == "gading rejo timur":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(19)'))).click()
    elif inputKelurahan == "gading rejo utara":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(20)'))).click()
    elif inputKelurahan == "tambah rejo barat":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(21)'))).click()
    elif inputKelurahan == "wonodadi utara":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(22)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(23)'))).click()
elif inputKecamatan == "ambarawa":
    if inputKelurahan == "ambarawa":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "ambarawa barat":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "kresnomulyo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "sumber agung":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "tanjunganom":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "jatiagung":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "margodadi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
elif inputKecamatan == "pardasuka":
    if inputKelurahan == "kedaung":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "pardasuka":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "suka negeri":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "tanjung rusia":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "warga mulyo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "pujodadi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "sukorejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "selapan":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "rantau tijang":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    elif inputKelurahan == "sidodadi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()
    elif inputKelurahan == "pardasuka timur":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(11)'))).click()
    elif inputKelurahan == "tanjung rusia timur":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(12)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(13)'))).click()
elif inputKecamatan == "pagelaran":
    if inputKelurahan == "candiretno":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "tanjung dalam":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "way ngison":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "sukawangi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "sukaratu":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "pagelaran":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "patoman":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "karangsari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "gumukmas":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    elif inputKelurahan == "bumiratu":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()
    elif inputKelurahan == "panutan":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(11)'))).click()
    elif inputKelurahan == "lugusari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(12)'))).click()
    elif inputKelurahan == "pamenang":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(13)'))).click()
    elif inputKelurahan == "gemahripah":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(14)'))).click()
    elif inputKelurahan == "pasir ukir":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(15)'))).click()
    elif inputKelurahan == "gumukrejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(16)'))).click()
    elif inputKelurahan == "pujiharjo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(17)'))).click()
    elif inputKelurahan == "padangrejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(18)'))).click()
    elif inputKelurahan == "sidodadi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(19)'))).click()
    elif inputKelurahan == "sumberejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(20)'))).click()
    elif inputKelurahan == "ganjaran":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(21)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(22)'))).click()
elif inputKecamatan == "banyumas":
    if inputKelurahan == "banyumas":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "banyuwangi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "sukamulya":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "sriwungu":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "banjarejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "waya krui":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "sri rahayu":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "nusawungu":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "sinar mulya":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    elif inputKelurahan == "banyu urip":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(11)'))).click()
elif inputKecamatan == "adiluwih":
    if inputKelurahan == "adiluwih":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "bandung baru":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "sinar waya":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "enggalrejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "sukoharum":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "waringinsari timur":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "tritunggal mulya":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "purwodadi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "srikaton":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    elif inputKelurahan == "tunggul pawenang":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()
    elif inputKelurahan == "bandung baru barat":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(11)'))).click()
    elif inputKelurahan == "totokarto":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(12)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(13)'))).click()
elif inputKecamatan == "sukoharjo":
    if inputKelurahan == "sinar baru":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "sukoharjo i":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "sukoharjo ii":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "sukoharjo iii":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "sukoharjo iv":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "panggungrejo":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "pandansari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "pandan surat":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "keputran":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    elif inputKelurahan == "sukoyoso":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()
    elif inputKelurahan == "siliwangi":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(11)'))).click()
    elif inputKelurahan == "waringinsari barat":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(12)'))).click()
    elif inputKelurahan == "pandansari selatan":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(13)'))).click()
    elif inputKelurahan == "sinar baru timur":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(14)'))).click()
    elif inputKelurahan == "panggungrejo utara":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(15)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(16)'))).click()
elif inputKecamatan == "pagelaran utara":
    if inputKelurahan == "fajar baru":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(1)'))).click()
    elif inputKelurahan == "kemilin":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(2)'))).click()
    elif inputKelurahan == "neglasari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(3)'))).click()
    elif inputKelurahan == "fajar mulia":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(4)'))).click()
    elif inputKelurahan == "margosari":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(5)'))).click()
    elif inputKelurahan == "giri tunggal":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(6)'))).click()
    elif inputKelurahan == "sumber bandung":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(7)'))).click()
    elif inputKelurahan == "madaraya":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(8)'))).click()
    elif inputKelurahan == "way kunir":
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(9)'))).click()
    else:
        WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.bg-white.shadow.px-4.py-5.sm\:rounded-lg.sm\:p-6:nth-child(2) .col-span-6.sm\:col-span-3:nth-child(4) li:nth-child(10)'))).click()


# Alamat
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'alamat'))).send_keys(inputAlamat)
# RT
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'rt'))).send_keys(inputRT)
# RW
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'rw'))).send_keys(inputRW)
# Email, Password
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'email'))).send_keys(inputNama.lower().replace(" ", "") + inputTanggalLahir + "@panpringsewu.com")
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'password'))).send_keys(inputNama.lower().replace(" ", "") + inputTempatLahir + "@panpringsewu.com")
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.ID, 'password_confirmation'))).send_keys(inputNama.lower().replace(" ", "") + inputTempatLahir + "@panpringsewu.com")

print("Mengupload Pas Photo...")
# Pas Photo
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '[for="foto_diri"] ~ [role="button"]'))).click()
sleep(2)
if inputPhotoPas == "":
    pyautogui.write("D:\\JOBS\\SIMPAN\\PHOTO\\AAAAAA.png")
    pyautogui.press('enter')
else:
    pyautogui.write("D:\\JOBS\\SIMPAN\\" + inputPhotoPas) 
    pyautogui.press('enter')

sleep(2)

print("Mengupload Photo KTP...")
# Photo KTP
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '[for="foto_ktp"] ~ [role="button"]'))).click()
sleep(2)
if inputPhotoKTP == "-":
    pyautogui.write("D:\\JOBS\\SIMPAN\\" + inputPhotoKTP) 
    pyautogui.press('enter')
else:
    pyautogui.write("D:\\JOBS\\SIMPAN\\" + inputPhotoKTP) 
    pyautogui.press('enter')
sleep(2)
WebDriverWait(webDriver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'form button[type="submit"]'))).click()
pyautogui.press('enter')

print("Selesai")