import logging

# set up logging.
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

def classify_message(message):
    '''
    Classify a message into a folder based on its content
    Args:
        message (str): The message to be classified.
    Returns:
        str: The folder where the message should be placed.
    '''
    if not isinstance(message, str):
        raise TypeError('Input must be a string')
    if not message.strip():
        raise ValueError('Input message cannot be empty')
    
    # define a dictionary that maps keywords to folders with priority order
    folder_mapping = {
        "Priority":["urgent","asap"],
        "Finance":["invoice"],
        "Calender":["meeting","schedule"],
        "HR":["job","resume"],
        "Projects":["project","task"],
        "Support":["error","issue","help","assistance"],
        "Personal":["holiday","vacation"]
    }
    
    #Convert the message to lowercase
    message = message.lower()
    
    #initialize variables
    matched_folders=[]
    final_folder="Misc"
    
    try:
        #iterate over the folder mapping
        for folder_name, keywords in folder_mapping.items():
            #check if any keyword is in the message
            if any(keyword in message for keyword in keywords):
                matched_folders.append(folder_name)
                
        if len(matched_folders) == 1:
            final_folder = matched_folders[0]
        elif len(matched_folders) > 1:
            #if multiple folders are matched, return the first one
            final_folder = matched_folders[0]
            logging.warning(f"Multiple folders matched for message: '{message}'."
                            f"Matched folders: '{matched_folders}'."
                            f"Classified as '{final_folder}'.")
    except Exception as e:
        logging.error(f"An error occurred while classifying the message: {str(e)}")
        raise
    return final_folder

