from sqlalchemy import create_engine, coloumn, integer, string, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

base = declaration_base()

class Image(base):
    __tablename__='images'
    id = coloumn(integer, primary_key=True)
    filename = coloumn(string,nullable=False)
    keywords = coloumn(text, nullable=False)

    engine = create_engine('sqlite:///virtual_design.db')
    Base.metadata.create_all(engine)

    saession = sessionmaker(bind=engine)
