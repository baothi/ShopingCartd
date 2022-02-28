FROM python:3.9.7

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /code
RUN /usr/local/bin/python -m pip install --upgrade pip

COPY requirements.txt /code/

RUN pip install --no-cache-dir  -r requirements.txt && rm -rf /var/lib/apt/lists/*
COPY . /code/
