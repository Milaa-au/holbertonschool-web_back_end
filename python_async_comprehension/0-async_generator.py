#!/usr/bin/env python3
'''TASK 00
'''

from asyncio import sleep
from random import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    '''Blabla'''
    for i in range(10):
        await sleep(1)
        yield 10 * random()
