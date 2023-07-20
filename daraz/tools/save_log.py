from pathlib import Path
import logging

def save_log(response):
    logging.info(f'assessing {response.url}')
    part = response.url.split("/")[-2] or None
    if response.url == 'https://www.daraz.com.bd/':
        part ='home'
    directory = "log"
    Path(directory).mkdir(parents=True, exist_ok=True)
    
   # Save request header
    request_filename = f"{directory}/daraz-{part}-request.txt"
    with open(request_filename, 'w') as request_file:
        request_file.write(f"GET {response.request.url}\n\n")
        for key, values in response.request.headers.items():
            for value in values:
                request_file.write(f"{key.decode()}: {value.decode()}\n")

        request_file.write("\n")
        # Save cookies
        cookies = response.request.headers.getlist('Cookie')
        if cookies:
            request_file.write("Cookies:\n")
            for cookie in cookies:
                request_file.write(f"{cookie.decode()}\n")
    print(f"Saved request header file {request_filename}")
    
    # Save response header
    response_filename = f"{directory}/daraz-{part}-response.txt"
    with open(response_filename, 'w') as response_file:
        response_file.write(f"URL: {response.url}\n\n")
        for key, value in response.headers.items():
            for value in values:
                response_file.write(f"{key.decode()}: {value.decode()}\n")
        
        response_file.write("\n")
        
        # Save cookies
        cookies = response.headers.getlist('Set-Cookie')
        if cookies:
            response_file.write("Cookies:\n")
            for cookie in cookies:
                response_file.write(f"{cookie.decode()}\n")
    print(f"Saved response header file {response_filename}")
    
    # Save HTML content
    html_filename = f"{directory}/daraz-{part}.html"
    Path(html_filename).write_bytes(response.body)
    print(f"Saved HTML file {html_filename}")