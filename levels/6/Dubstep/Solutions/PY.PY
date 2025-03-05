def song_decoder(song):
    result = song.replace('WUB', ' ').strip()
    result_list = [item.strip() for item in result.split()]
    result = ' '.join(result_list)
    return result